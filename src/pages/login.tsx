import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
  Container,
} from "@mantine/core";
import { GoogleButton } from "@/components";
import { NextPageWithLayout } from "./_app";

const LoginPage: NextPageWithLayout = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Container size="xs" py="xl">
      <Paper p="xl" withBorder>
        <Text size="lg" weight={500}>
          Welcome to Mantine, login with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton>Google</GoogleButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
          </Stack>

          <Group position="right" mt="xl">
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
