import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueriesPage = ({ email }) => {

    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId

    const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId //double negation change non-boolean value to boolean
    })

    const courseData = courses?.data?.courses

    // console.log('user', user);
    // console.log('channelId', channelId);
    //console.log('courses', courseData);
    return (<>
        <div>DependentQueriesPage</div>
        {
            user && (<h1>User email:  {user.data?.id}</h1>)
        }
        {
            channelId && (<h1>Channel Name:  {channelId}</h1>)
        }
        {
            courseData && (<>
                <h1>Course Name:</h1>
                {
                    courseData.map((item, index) => (
                        <h1>{index+1}:{item}</h1>
                    ))
                }
            </>)
        }
    </>)
}