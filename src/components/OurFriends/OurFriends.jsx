import React, { useState } from 'react';
import Container from '../../shared/components/Container';
import Title from 'shared/components/Title';
import {
  FriendsContainer,
  FriendsList,
  Friend,
  FriendTitle,
  FriendBlock,
  FriendImg,
  FriendInfo,
  InfoItem,
  InfoItemTitle,
  InfoItemText,
  InfoItemTime,
  ScheduleField,
  ScheduleRow,
  ScheduleDay,
  ScheduleTime,
  InfoItemAddress,
  InfoItemEmail,
  InfoItemPhone,
} from './OurFriends.styles';
import friendImgPlug from '../../images/other/ourFriends-plug-min.jpeg';

// {
//     "title": "Притулок для бездомних тварин 'Сіріус'",
//     "url": "https://dogcat.com.ua",
//     "addressUrl": "https://goo.gl/maps/iq8NXEUf31EAQCzc6",
//     "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png",
//     "address": "Fedorivka, Kyiv Oblast, Ukraine, 07372",
//     "workDays": [
//       { "isOpen": false },
//       { "isOpen": false },
//       { "isOpen": false },
//       { "isOpen": false },
//       { "isOpen": false },
//       { "isOpen": true, "from": "11:00", "to": "16:00" },
//       { "isOpen": true, "from": "11:00", "to": "16:00" }
//     ],
//     "phone": "+380931934069",
//     "email": null
//   },

const OurFriends = ({ friends }) => {
  const [expandedFriendId, setExpandedFriendId] = useState(null);

  const renderTodayWorkday = workDays => {
    const today = new Date().getDay();
    const todayWorkday = workDays[today];

    if (todayWorkday && todayWorkday.isOpen) {
      return (
        <div key={today}>
          {todayWorkday.from} - {todayWorkday.to}
        </div>
      );
    } else {
      return <div key={today}>Closed</div>;
    }
  };

  const toggleExpandFriend = friendId => {
    if (expandedFriendId === friendId) {
      setExpandedFriendId(null);
    } else {
      setExpandedFriendId(friendId);
    }
  };

  const renderSchedule = workDays => {
    const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return daysOfWeek.map((day, index) => {
      const workDay = workDays[index];

      if (workDay && workDay.isOpen) {
        return (
          <ScheduleRow key={day}>
            <ScheduleDay>{day}</ScheduleDay>
            <ScheduleTime>
              {workDay.from} - {workDay.to}
            </ScheduleTime>
          </ScheduleRow>
        );
      } else {
        return (
          <ScheduleRow key={day}>
            <ScheduleDay>{day}</ScheduleDay>
            <ScheduleTime>Closed</ScheduleTime>
          </ScheduleRow>
        );
      }
    });
  };

  const friendsList = friends.map(
    ({
      id,
      title,
      url,
      addressUrl,
      imageUrl,
      address,
      workDays,
      phone,
      email,
    }) => {
      const isExpanded = expandedFriendId === id;

      return (
        <Friend key={id}>
          <FriendTitle href={url} rel="noreferrer noopener nofollow">
            {title}
          </FriendTitle>
          <FriendBlock>
            <FriendImg src={imageUrl ? imageUrl : friendImgPlug} alt={title} />
            <FriendInfo>
              <InfoItemTime
                onClick={() => toggleExpandFriend(id)}
                hasSchedule={workDays && workDays.length > 0}
              >
                <InfoItemTitle>Time:</InfoItemTitle>
                <InfoItemText>
                  {workDays === null || workDays === undefined ? (
                    'day and night'
                  ) : isExpanded && !workDays ? (
                    <div>on the website</div>
                  ) : isExpanded ? (
                    <>
                      <ScheduleField>{renderSchedule(workDays)}</ScheduleField>
                      {renderTodayWorkday(workDays)}
                    </>
                  ) : (
                    renderTodayWorkday(workDays)
                  )}
                </InfoItemText>
              </InfoItemTime>
              <InfoItem>
                <InfoItemTitle>Adress:</InfoItemTitle>
                <InfoItemText>
                  <InfoItemAddress href={addressUrl}>
                    {address ? address : 'on the website'}
                  </InfoItemAddress>
                </InfoItemText>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Email: </InfoItemTitle>
                <InfoItemText>
                  {email ? (
                    <InfoItemEmail href={`mailto:${email}`}>
                      {email}
                    </InfoItemEmail>
                  ) : (
                    'on the website'
                  )}
                </InfoItemText>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Phone:</InfoItemTitle>
                <InfoItemText>
                  {phone ? (
                    <InfoItemPhone href={`tel:${phone}`}>{phone}</InfoItemPhone>
                  ) : (
                    'on the website'
                  )}
                </InfoItemText>
              </InfoItem>
            </FriendInfo>
          </FriendBlock>
        </Friend>
      );
    }
  );
  return (
    <Container>
      <FriendsContainer>
        <Title as="h2" color="#000000">
          Our friends
        </Title>
        <FriendsList>{friendsList}</FriendsList>
      </FriendsContainer>
    </Container>
  );
};

export default OurFriends;
