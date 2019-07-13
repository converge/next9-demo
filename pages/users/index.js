// users/index.js
import Link from 'next/link';

const users = [
  {
    id: 1,
    name: 'Eduardo',
  },
  {
    id: 2,
    name: 'Cinthya',
  },
];

function Users() {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}/${user.name}/profile`}>
              <a>{user.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
