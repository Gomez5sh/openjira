import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const EntryPage = () => {
  return (
    <Layout title="Algo aqui">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="Entrada: "
              subheader={"Creado hace: ...... minutos"}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder="Nueva  entrada"
                fullWidth
                autoFocus
                multiline
                label="Actualizar entrada"
              />
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
              >
                Editar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
