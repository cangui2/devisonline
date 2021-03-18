import React, {useState} from "react";
import {Accordion, Button, Card, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import axios from "axios";


function InputField(props) {

    const [total, setTotal] = useState()
    const [index, setIndex]=useState(0);

    const [inputList, setInputList] =
        useState([{
            description: "",
            qte: "",
            prix: "",
            total: "",
            nom: "",
            Adress: "",
            Adress2: "",
            ville: "",
            pays: "",
            codepostale: "",
            datevalidite:"",
            description1:"",
            condition:"",
            tva:"",
            libelle:""
        }]);

    const [test,setTest] = useState()
    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setTotal(list[0]["qte"] * list[0]["prix"]);
        setInputList(list);
        props.onReceiveData(list);

    };

    const handleInputChange2 =(e)=>{
        const {name, value} = e.target;
        console.log(e.target)
        const list = [...inputList];
        list[index][name] = value;
        console.log(list)
        setInputList(list);
        props.onReceiveData(list);

    }

// handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);

    };

// handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {description: "", qte: "", prix: ""}]);
    };

    const handleSendData =()=>{
        //console.log( axios.post('http://127.0.0.1:8000/api'))
        axios({
            method: 'post',
            url: '/api',
            data: JSON.stringify(inputList)
        })
            .then(
                (result) => {

                    console.log(result);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {

                    console.log(error);
                }
            )

    }



    return (
        // select format
        <Container>

            <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="libelle"
                onChange={event => handleInputChange2(event)}
            >
                <option value="Selectionné type de document ">Choose...</option>
                <option
                    value="Devis"

                >Devis
                </option>
                <option
                    value="Facture"

                >Facture
                </option>
            </Form.Control>


            {/*en tete client */}
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Renseignement client
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form style={{border: 'thick double #32a1ce'}}>


                                        <Form.Row>
                                            <Form.Group as={Col} xs={6} controlId="formGridEmail">
                                                <Form.Label>Nom Client</Form.Label>
                                                <Form.Control
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    className="ml10"
                                                    name="nom"
                                                    //value={x.nom}
                                                    onChange={event => handleInputChange2(event)}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} xs={12} controlId="formGridPassword">
                                                <Form.Label>Adresse</Form.Label>
                                                <Form.Control
                                                    name="Adress"
                                                    //value={x.Adress}
                                                    placeholder="Adresse"
                                                    onChange={event => handleInputChange2(event)}
                                                />
                                            </Form.Group>


                                            <Form.Group controlId="formGridAddress2" as={Col} xs={12}>
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control
                                                    placeholder="Apartment, studio, or floor"
                                                    name="Adress2"
                                                    //value={x.Adress2}
                                                    onChange={event => handleInputChange2(event)}
                                                />
                                            </Form.Group>


                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Ville</Form.Label>
                                                <Form.Control
                                                    name="ville"
                                                    //value={x.ville}
                                                    onChange={event => handleInputChange2(event)}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Pays</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    defaultValue="Choose..."
                                                    name="pays"
                                                    //value={x.pays}
                                                    onChange={event => handleInputChange2(event)}
                                                >
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Code Postale</Form.Label>
                                                <Form.Control
                                                    name="codepostale"
                                                    //value={x.codepostale}
                                                    onChange={event => handleInputChange2(event)}
                                                />
                                            </Form.Group>
                                        </Form.Row>



                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Description et paiement!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">

                        <Card.Body>

                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Description :</Form.Label>
                                <Form.Control

                                    placeholder="Description"
                                    name="description1"
                                    //value={}
                                    onChange={event => handleInputChange2(event)}
                                />
                                <Form.Text className="text-muted">
                                    Renseignement obligatoire
                                </Form.Text>
                            </Form.Group>



                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Condition de paiement :</Form.Label>
                                <Form.Control

                                    name="condition"
                                    //value={x.condition}
                                    onChange={event => handleInputChange2(event)}
                                />
                                <Form.Text className="text-muted">
                                    Renseignement obligatoire
                                </Form.Text>
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Date de validité  :</Form.Label>
                                <Form.Control

                                    placeholder="Condition de paiement"
                                    name="datevalidite"
                                    //value={x.datevalidite}
                                     onChange={event => handleInputChange2(event)}
                                />
                                <Form.Text className="text-muted">
                                    Renseignement obligatoire
                                </Form.Text>


                            </Form.Group>
                            <Form.Label>Tva applicable</Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                                name="tva"
                                onChange={value => handleInputChange2(value)}
                            >
                                <option value="Selectionné type de document ">Choose...</option>
                                <option

                                    value={20}

                                >Tva 20%
                                </option>
                                <option

                                    value={5.5}

                                >Tva 5.5%
                                </option>
                                <option

                                    value={'TVA non applicable, art. 293 B du CGI'}

                                >TVA non applicable, art. 293 B du CGI
                                </option>
                            </Form.Control>
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Corp du devis
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            {/*imput de description*/}

                            {inputList.map((x, i) => {
                                return (
                                    <div className="form" style={{border: 'thick double #32a1ce'}}>

                                        <InputGroup size="sm" className="mb-3">
                                            <Form.Group controlId="formBasicEmail" as={Col}>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="description"
                                                    placeholder="description"
                                                    value={x.description}
                                                    onChange={e => handleInputChange(e, i)}
                                                />

                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail" as={Col}>
                                                <Form.Label>Quantitée(s)</Form.Label>
                                                <FormControl
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    className="ml10"
                                                    name="qte"
                                                    placeholder="Quantitée(s)"
                                                    value={x.qte}
                                                    onChange={e => handleInputChange(e, i)}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail" as={Col}>
                                                <Form.Label>Prix</Form.Label>
                                                <FormControl
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    className="ml10"
                                                    name="prix"
                                                    placeholder="Prix"
                                                    value={x.prix}
                                                    onChange={e => handleInputChange(e, i)}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail" as={Col}>
                                                <Form.Label>Sous-total</Form.Label>
                                                <FormControl
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    className="ml10"
                                                    name="qte"
                                                    placeholder="total"
                                                    value={x.total = x.prix * x.qte}
                                                    onChange={e => handleInputChange(e, i)}
                                                />
                                            </Form.Group>
                                            <div className="btn-box">
                                                {inputList.length !== 1 && <button
                                                    className="mr10"
                                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                {inputList.length - 1 === i &&
                                                <button onClick={handleAddClick}>Add</button>}
                                            </div>
                                        </InputGroup>
                                    </div>
                                );
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Button as="input" type="button" value="Submit" onSubmit={handleSendData()} />

            <div style={{marginTop: 20}}>{JSON.stringify(inputList)}</div>
        </Container>
    );
}

export default InputField;
