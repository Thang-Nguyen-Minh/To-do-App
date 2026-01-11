import { useState } from 'react'
import React from 'react'
import {TaskEmptyState} from "@/components/TaskEmptyState.jsx";
import {TaskCard} from "@/components/TaskCard.jsx";
export const TaskList = () => {
    let filter='all';
    const filteredTasks = [
        {
            _id : '1',
            title : 'Learn ReactJS',
            status : 'active',
            completedAt: null,
            createdAt : new Date(),
        },
        {
            _id : '2',
            title : 'Learn NodeJS',
            status : 'completed',
            completedAt: null,
            createdAt : new Date(),
        }
    ];
    if(!filteredTasks || !filteredTasks.length){
        return <TaskEmptyState filter={filter} />;
    }
    return (
        <div className="space y-3">
            {filteredTasks.map((task, index) => (
                <TaskCard
                    key={task._id ?? index}
                    task={task}
                    index={index}
                />
            ))
            }
        </div>
    )
}
