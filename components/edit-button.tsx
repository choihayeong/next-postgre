'use client';

export default function EditButton({}) {
  const clickEdit = () => {
    // password 값이 맞으면 app/page.tsx 에 admin 변수 true 할당...........
  }

  return (
    <div>
      <button type="button" onClick={clickEdit}>
        Edit
      </button>
    </div>
  )
}
