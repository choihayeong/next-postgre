import { sql } from '@vercel/postgres'
import { AddForm } from '@/app/add-form'
import { DeleteForm } from '@/app/delete-form'
import EditButton from '@/components/edit-button'

export const runtime = 'edge'
export const preferredRegion = 'home'

export default async function Home() {
  let data = await sql`SELECT * FROM todos`
  const { rows: todos } = data

  let admin = false
  
  return (
    <main>
      <h1>Todos</h1>

      <EditButton />

      {
        /* 관리자일 경우에 데이터 추가하도록 설정 */
        admin ? 
        <AddForm  /> : 
        ""
      }
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            {
              /* 관리자일 경우에 데이터 삭제하도록 설정 */
              admin ? 
              <DeleteForm id={todo.id} todo={todo.text} /> :
              ""
            }
          </li>
        ))}
      </ul>
    </main>
  )
}