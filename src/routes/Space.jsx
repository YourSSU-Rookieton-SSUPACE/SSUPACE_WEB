import { useParams } from 'react-router-dom';

function Space() {
  const { spaceId } = useParams();

  return <>Space {spaceId}</>;
}

export default Space;
