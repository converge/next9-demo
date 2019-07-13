// /users/[id]/[name]/profile.js

function UserProfile({ user }) {
  return (
    <h1>
      Hello! My ID is {user.id}, but you can call me {user.name}
    </h1>
  );
}

async function getInitialProps({ query }) {
  const { id, name } = query;
  return {
    user: {
      id,
      name,
    },
  };
}

UserProfile.getInitialProps = getInitialProps;

export default UserProfile;
