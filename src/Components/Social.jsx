import { Typography } from "@material-ui/core";

export default function Social({ propdata }) {
  // propdata : {
  //   gender,
  //   name,
  //   location,
  //   email,
  //   login,
  //   dob,
  //   registered,
  //   phone,
  //   cell,
  //   id,
  //   picture,
  //   nat
  //   }
  console.log(propdata);
  // let a = propdata[0].picture.medium;
  return (
    <>
      <div>
        <Typography variant="h3" component="div" gutterBottom>
          {propdata[0].name.title} {propdata[0].name.first}{" "}
          {propdata[0].name.last}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Unique ID : {propdata[0].id.value}
        </Typography>

        {/* <Avatar
          alt="Remy Sharp"
          src={propdata[0].picture.large}
          sx={{ width: 100, height: 100 }}
        /> */}
        <img alt={propdata[0].name.title} src={propdata[0].picture.medium} />

        <Typography variant="body1" component="div" gutterBottom>
          ph no: {propdata[0].phone}
          <br />
          email: {propdata[0].email}
          <br />
          from :{propdata[0].location.country}
        </Typography>
      </div>
    </>
  );
}
