<Container>
  {users.map((val, idx) => {
    return (
      <Card style={{ width: "18rem" }} key={idx}>
        <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Body>
          <Card.Title>{val.fullname}</Card.Title>
          <Card.Text>{val.quotes}</Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
    );
  })}
</Container>;
