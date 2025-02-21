/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 封装 localStorage 相关操作
export const storage = {
  getItem: (key: string, defaultValue: any = null): any => {
    if (typeof window === "undefined") {
      return defaultValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? item : defaultValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  },

  setItem: (key: string, value: any): void => {
    if (typeof window === "undefined") {
      return
    }
    try {
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  },

  removeItem: (key: string): void => {
    if (typeof window === "undefined") {
      return
    }
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  },

  clear: (): void => {
    if (typeof window === "undefined") {
      return
    }
    try {
      window.localStorage.clear()
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  },
}
