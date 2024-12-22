import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Compo() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
      <h1 className="text-2xl font-bold">Welcome to TailwindCSS Dark Mode</h1>
    </div>
    </div>
  )
}
