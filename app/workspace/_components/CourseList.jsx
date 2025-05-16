"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function CourseList() {

  const [courseList, setCourseList] = useState([])

  return (
    <div className='mt-10'>
      <h2 className='font-bold text-3xl'>Course List</h2>
      {courseList?.length == 0 ?
        <div className='flex flex-col p-7 items-center justify-center gap-4 bg-gray-200 rounded-lg shadow-lg mt-4'>
          <h2 className='my-2 text-xl font-bold'>Looks like you haven't created any course</h2>
          <Button>+ Create your first course</Button>
        </div>
        :
        <div>
          List of Courses
        </div>
      }
    </div>
  )
}

export default CourseList
