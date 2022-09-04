import React, { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadeMeetups, setLoadeMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetup-9d744-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadeMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadeMeetups} />
    </section>
  );
};

export default AllMeetupsPage;





