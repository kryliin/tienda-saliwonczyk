import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import * as yup from 'yup';
import { Formik } from 'formik'
import Conteiner from 'react-bootstrap/Container'
import swal from 'bootstrap-sweetalert'




const schema = yup.object().shape({
    nombre: yup.string().required(),
    apellido: yup.string().required(),
    mail: yup.string().required(),
    ciudad: yup.string().required(),
    pais: yup.string().required(),
    cp: yup.string().required(),
    observaciones: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'debe aceptar los terminos'),
});


function mensaje() {
    swal({
      title: "Excelente!",
      text: "Se ha enviado su consulta" ,
      icon: "success",
      button: "Si",
      confirmButtonClass: "btn-success",
      buttonText: 'Si'
    });
  }

function Contacto() {

    return (
        <Conteiner className="border">
            <Formik
                validationSchema={schema}
                onSubmit={mensaje()}
                initialValues={{
                    nombre: 'Nombre',
                    apellido: 'Apellido',
                    username: '',
                    ciudad: '',
                    pais: '',
                    cp: '',
                    observaciones: 'Ingrese sus observaciones',
                    terms: false,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    isValid={touched.nombre && !errors.nombre}
                                />
                                <Form.Control.Feedback tooltip>Excelente!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik102"
                                className="position-relative"
                            >
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="apellido"
                                    value={values.apellido}
                                    onChange={handleChange}
                                    isValid={touched.apellido && !errors.apellido}
                                />

                                <Form.Control.Feedback tooltip>Excelente!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                                <Form.Label>Mail</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="e-mail"
                                        aria-describedby="inputGroupPrepend"
                                        name="mail"
                                        value={values.mail}
                                        onChange={handleChange}
                                        isInvalid={!!errors.mail}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.mail}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationFormik103"
                                className="position-relative"
                            >
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ciudad"
                                    name="ciudad"
                                    value={values.ciudad}
                                    onChange={handleChange}
                                    isInvalid={!!errors.ciudad}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.ciudad}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>País</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="País"
                                    name="País"
                                    value={values.País}
                                    onChange={handleChange}
                                    isInvalid={!!errors.País}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.País}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik105"
                                className="position-relative"
                            >
                                <Form.Label>C.P</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Cod Postal"
                                    name="cp"
                                    value={values.cp}
                                    onChange={handleChange}
                                    isInvalid={!!errors.cp}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.cp}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Observaciones</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Observaciones"
                                name="observaciones"
                                value={values.observaciones}
                                onChange={handleChange}
                                isInvalid={!!errors.observaciones}
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.observaciones}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Debe aceptar los Terminos y condiciones"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik106"
                                feedbackTooltip
                            />
                        </Form.Group>
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </Conteiner>
    )
}

export default Contacto;