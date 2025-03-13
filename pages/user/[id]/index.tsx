import { GetServerSideProps } from 'next';
import { FC } from 'react';

interface UserPageProps {
  id: string;
}

const UserPage: FC<UserPageProps> = ({ id }) => {
  return <div>User id: {id}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: { id },
  };
};

export default UserPage;
