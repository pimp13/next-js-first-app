'use strict';
import axios from "axios";
import { Metadata } from "next";
import { toUpperCamelCaseWithSpaces } from "@/helpers/Helper";
import { Badge } from "flowbite-react";

export const metadata: Metadata = {
  title: toUpperCamelCaseWithSpaces("home page"),
}

export type Posts = Post[];

export interface Post {
  id: number
  title: string
  status: string
  summary: string
  body: string
  meta?: Meta
  author: Author
  created_at: string
  updated_at: string
}
export interface Meta {
  title: string
  author: string
  description: string
}

export interface Author {
  name: string
}


export default async function Admin() {
  const { data: posts } = await axios.get("http://127.0.0.1:8000/api/post");

  const statusColor = (status: string): string => {
    switch (status) {
      case "published":
        return "blue";
      case "draft":
        return "success";
      case "editorial":
        return "warning";
      default:
        return "purple";
    }
  }

  return (
    <div className="mt-5">

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="all_items" type="checkbox"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="all_items" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
          </thead>

          <tbody>

          {
            posts.data.length > 0 ? posts.data.map((post: Post) => (
              <tr key={post.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`item_id_${post.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor={`item_id_${post.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {post.title}
                </th>
                <td className="px-6 py-4">
                  {post.author?.name || 'unknown'}
                </td>
                <td className="px-6 py-4">
                  <Badge className="inline" color={statusColor(post.status)}>
                    {post.status}
                  </Badge>
                </td>

                <td className="flex items-center px-6 py-4">
                  <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</span>
                  <span className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</span>
                </td>
              </tr>
            )) : 'Null'
          }

          </tbody>
        </table>
      </div>

    </div>
  );
}
