import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <>
  <Head>
    <title>Add a New Meetup</title>
    <meta
      name="description"
      content="Add your own meetups and create amazing networking opportunities."
    />
  </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} /></>
  ;
};

export default NewMeetupPage;
