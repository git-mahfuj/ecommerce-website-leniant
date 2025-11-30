import { defineField , defineType } from "sanity";

import {TagIcon} from"@sanity/icons"

export const categoryType = defineField({
    name: "category",
    title: "Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name:"range",
            type:"number",
            description:"Starting from",
        }),
        defineField({
            name :"featured",
            type:"boolean",
            initialValue: false,
        }),
        defineField({
            name:"image",
            title:"Category Image",
            type:"image",
            options: {
                hotspot: true,
            },
        })
    ],
})