import React from 'react';

const profileData = {
    velopert: {
        name: '김민준',
        description:
            'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공',
    },
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const { name, description } = profileData[username] || { name : '', description : ''};
    if (!name) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username} {name}
                <p>{description}</p>
            </h3>
        </div>
    )
};

export default Profile;
