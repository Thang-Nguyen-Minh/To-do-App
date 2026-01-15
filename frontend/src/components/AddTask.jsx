import { useState } from 'react'
import React from 'react'
import {Card} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Plus} from "lucide-react";

export const AddTask = () => {
    return (
        <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                    type="text"
                    placeholder="Cần phải làm gì"
                    className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:boder-priamry/50 focus:ring-priamry/20"
                />
                <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                >
                    <Plus className="size-5"/>
                    AddTask
                </Button>
            </div>
        </Card>
    )
}
