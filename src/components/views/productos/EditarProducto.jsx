import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import {
  consultaProductoParaEditar,
  consultaEditarProducto,
} from "../../helpers/queris";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navegacion = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    consultaProductoParaEditar(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombre", respuesta.nombre);
        setValue("estado", respuesta.estado);
        setValue("precio", respuesta.precio);
        setValue("detalle", respuesta.detalle);
        setValue("categoria", respuesta.categoria);
        setValue("imagen", respuesta.imagen);
      } else {
        Swal.fire(
          "Ocurrió un error",
          "No se puede editar el producto, inténtelo mas tarde.",
          "error"
        );
      }
    });
  }, []);

  const onSubmit = (productoEditado) => {
    consultaEditarProducto(productoEditado, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto editado",
          `El producto ${productoEditado.nombre} fue editado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El producto ${productoEditado.nombre} no se pudo editar. Intentelo mas tarde.`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection my-2">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            maxLength={100}
            {...register("nombre", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado*</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "El estado es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Activo">Activo</option>
            <option value="De baja">De baja</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            min={1}
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 100,
                message: "El precio minimo es de $100",
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Detalle*</Form.Label>
          <Form.Control
            maxLength={300}
            type="text"
            placeholder="Ej: Pizza Napolitana"
            {...register("detalle", {
              required: "el detalle del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 300,
                message: "La cantidad maxima de caracteres es de 300 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.detalle?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Bebidas con alcohol">Bebidas con alcohol</option>
            <option value="Bebidas sin alcohol">Bebidas sin alcohol</option>
            <option value="Pastas">Pastas</option>
            <option value="Pizzas">Pizzas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            maxLength={300}
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>{'      '}
        <Button variant="primary" type="submit" href={'/administrador'} >
          Cancelar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
