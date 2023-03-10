import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannnelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const DependentQueries = ({email}) => {
  const {data: user} = useQuery(["user", email], () => fetchUserByEmail(email));
  const channelId = user?.data.channelId;
  const { data: courses} = useQuery(["courses", channelId], ()=> fetchCoursesByChannnelId(channelId), {enabled: !!channelId});

  console.log(courses?.data.courses);

  return (
    <div>
      dependent queries
      {
        courses?.data.courses.map((course)=> {
          return(
            <h5 key={course}>{course}</h5>
          );
        })
      }
    </div>
  )
}

export default DependentQueries;
