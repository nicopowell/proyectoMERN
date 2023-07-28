import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaAgregarProducto } from "../../helpers/queris";
import Swal from "sweetalert2";


const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (productoNuevo) => {
    productoNuevo.precio = parseFloat(productoNuevo.precio);
    consultaAgregarProducto(productoNuevo).then((respuestaCreated)=>{
      if(respuestaCreated && respuestaCreated.status === 201){
        Swal.fire('Producto creado', `El producto ${productoNuevo.nombre} fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Ocurrio un error', `El producto ${productoNuevo.nombre} no fue creado, intentelo mas tarde`, 'error');
      }
    })
   
  };

  
  return (
    <section className="container mainSection my-2">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombre", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado*</Form.Label>
          <Form.Select {...register("estado", {
              required: "El estado es obligatorio",
            })}
            >
            <option value="">Seleccione una opcion</option>
            <option value="activo">activo</option>
            <option value="de baja">De baja</option>
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
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Detalle*</Form.Label>
          <Form.Control
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
                message: "La cantidad maxima de caracteres es de 2 digitos",
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
                <option value="Bebida con alcohol">Bebida con alcohol</option>
                <option value="Bebida sin">Bebida sin alcohol</option>
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
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;