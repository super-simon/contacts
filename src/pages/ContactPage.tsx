import { Cached } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TagForm from "../components/TagForm";
import Tags from "../components/Tags";
import { IContactItem } from "../models/IContactItem";
import { apiService } from "../services/api.service";

const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<IContactItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadContact = () => {
    if (id) {
      setIsLoading(true);
      setError(null);
      apiService
        .getContactDetails(id)
        .then((res) => {
          setContact(res.data.resources[0] || null);
        })
        .catch(() => {
          setError(
            "An error occurred while loading the contact. Try to refresh.",
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    loadContact();
  }, [id]);

  return (
    <>
      <Button>
        <Link to="/">Back to list</Link>
      </Button>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={loadContact}
      >
        <Cached />
      </IconButton>
      {isLoading && <LoadingButton loading={isLoading} disabled />}
      <Card>
        {error && <Typography color="red">{error}</Typography>}

        {contact && (
          <>
            <Avatar
              style={{
                float: "left",
                margin: "1em",
              }}
              alt={`${
                contact.fields["first name"]
                  ? contact.fields["first name"][0].value
                  : ""
              } ${
                contact.fields["last name"]
                  ? contact.fields["last name"][0].value
                  : ""
              }`}
              src={contact.avatar_url}
            />
            <Typography variant="h2">
              {contact.fields["first name"]
                ? contact.fields["first name"][0].value
                : ""}{" "}
              {contact.fields["last name"]
                ? contact.fields["last name"][0].value
                : ""}
            </Typography>
            <Typography>
              <em>
                {contact.fields["email"] && contact.fields["email"][0].value}{" "}
              </em>
            </Typography>

            <div style={{ margin: "1em" }}>
              <Typography variant="h5">Tags</Typography>

              <Tags tags={contact.tags} />

              <TagForm
                contactId={contact.id}
                tags={contact.tags}
                updateContact={setContact}
              />
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default ContactPage;
