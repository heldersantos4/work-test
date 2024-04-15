import { Tools } from "@/components/Tools";
import { Typograph } from "@/components/Typograph";
import { DataTools } from "@/types/cmp.tools";

export default function Index() {

    const tools: DataTools[] = [
        {
            type: "text",
            tool_id: "123",
            data: {
                loadOrder: [0, 0],
                content: "HELLO WORLD!"
            }
        },
        {
            type: "image",
            tool_id: "456",
            data: {
                loadOrder: [0, 1],
                content: "https://i.pinimg.com/474x/c7/1f/81/c71f81f39045e977f617dff4806a2d3c.jpg"
            }
        },
        {
            type: "text",
            tool_id: "789",
            data: {
                loadOrder: [2, 0],
                content: "I <3 U (:"
            }
        }
    ];

    return (
        <>
            <Typograph sx="title">
                Criando botão de adicionar *tools*
            </Typograph>

            <Tools tools={tools}/>
        </>
    )
}