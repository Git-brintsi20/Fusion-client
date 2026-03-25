import React, { useState, useEffect } from "react";
import {
  Paper,
  Button,
  Group,
  Text,
  Stack,
  ScrollArea,
  Loader,
} from "@mantine/core";
import ComplaintCard from "../../components/cards/ComplaintCard";
import { studentService } from "../../services";

export default function Complaints() {
  const [activeComplaints, setActiveComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch complaints for the logged-in user
  const fetchActiveComplaints = async () => {
    try {
      setLoading(true);
      const response = await studentService.getComplaints();

      if (response.data && response.data.complaints) {
        setActiveComplaints(response.data.complaints);
      } else {
        setError("No complaints found for this user.");
      }
    } catch (err) {
      console.error("Error fetching active complaints:", err);
      setError(
        err.response?.data?.message ||
          "Failed to fetch complaints. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveComplaints(); // Fetch complaints on component mount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Paper
      shadow="md"
      p="md"
      withBorder
      sx={(theme) => ({
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
      })}
    >
      <Group position="apart" style={{ width: "100%" }} mb="xl">
        <Text
          align="left"
          size="24px"
          style={{ color: "#757575", fontWeight: "bold" }}
        >
          Register Complaints
        </Text>
        <Button
          size="xl"
          onClick={() => console.log("Redirect to complaint form")}
        >
          Make Complaint
        </Button>
      </Group>

      <ScrollArea style={{ flex: 1 }}>
        {loading ? (
          <>
            <Loader size="md" />
            {console.log("Loading complaints...")}
          </>
        ) : error ? (
          <>
            <Text color="red" align="center">
              {error}
            </Text>
            {console.log("Error occurred:", error)}
          </>
        ) : (
          <Stack spacing="md">
            <Text weight={500} size="xl" color="dimmed">
              Active Complaints
            </Text>
            {console.log("Rendering complaints:", activeComplaints)}
            {activeComplaints.length > 0 ? (
              activeComplaints.map((complaint) => (
                <ComplaintCard
                  key={complaint.id}
                  hall_name={complaint.hall_name}
                  roll_number={complaint.roll_number}
                  student_name={complaint.student_name}
                  description={complaint.description}
                  contact_number={complaint.contact_number}
                />
              ))
            ) : (
              <>
                <Text color="dimmed" align="center">
                  No active complaints found.
                </Text>
                {console.log("No complaints to render.")}
              </>
            )}
          </Stack>
        )}
      </ScrollArea>
    </Paper>
  );
}
