# next-postgre
- deploying with database by using vercel, postgreSQL, next.js

## Priority
- postgreSQL 설치
- GitHub repository
- vercel account
- pnpm 설치

#### 참고 링크
- [w3c school 공식문서에서 postgreSQL 설치 및 튜토리얼](https://www.w3schools.com/postgresql/index.php)
- [vercel에서 템플릿 설치](https://vercel.com/templates/next.js/postgres-starter)
- [next.js 공식문서에서 데이터베이스 세팅 참고](https://vercel.com/templates/next.js/postgres-starter)
- [pgAdmin 4에 서버정보 등록](https://github.com/choihayeong/next-postgre/wiki)

<hr />

## 데이터 생성과 삭제

### pgAdmin 4를 통해 해당 DB에 todos 테이블 생성
```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL
);
```

#### 참고 링크 
- [Learning forms and mutations with the App Router](https://github.com/vercel/next.js/tree/canary/examples/next-forms)


