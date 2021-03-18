import {Col, Container, Row, Table} from "react-bootstrap";
import React,{useEffect, useState} from "react";


function Result(props) {
    const data1 = props.data
    const [montantHt,setMontantHt]=useState([]);
    console.log(props.data)


useEffect(()=>{
    for (let i = 0; i < props.data.length; i++) { // La tu fais une boucle sur le nombre d'objet que ton tableau contient
        let up=[]

        for (let test in props.data) { // Ici nouvelle boucle sur chaque objet de la liste
            // Ici tu as accès à l'objet donc tu peux afficher ses propriétés par exemple :
            // console.log(list[student].name) tu obtiens : ZOZO puis POPO puis OHO etc...
            up.push(props.data[test].total)
            //setTotal(value[test].total)
           // console.log(props.data[test].total)
            // Ceci renvoit object Object car tu ne précise aucune propriété de ton objet
        }
        // Enfin le problème de boucle vient du for in dans la boucle for
        // Quand i vaut 0 ta boucle for in parcours tous les objets de ta liste
        // Quand i vaut 1 ta boucle for in parcours à nouveau tous les objets de ta liste et ainsi de suite jusqu'a ce que i soit égal au nombre d'élements de ta liste, en l'occurence 5, voilà pourquoi tu obtiens autant d'object Object
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let total = up.reduce(reducer);
        console.log(total);
        setMontantHt(total)
    }

},[data1])
   // const a =  useState({props.data.map((value)=> {value.total} )});
    //console.log(a);
    //const sum = a.reduce(function(a, b) { return a + b; }, 0);
if(props.data.length >=1){
    return (
        <Container>
            <h1>{props.data[0].libelle}</h1>
            <Row>
                <Col>1 of 2</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>

                        <p>
                            {props.data[0].nom}<br/>
                            {props.data[0].Adress}<br/>
                            {props.data[0].Adress2}<br/>
                            {props.data[0].ville}<br/>
                            {props.data[0].codepostale}<br/>
                            {props.data[0].pays}
                        </p>


                </Col>
            </Row>
            <Row>

                <Col>
                    <p> Description : {props.data[0].description1}</p>
                </Col>

            </Row>
            <Row>

                <Col>Condition de paiement :{props.data[0].condition}</Col>

            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Decription</th>
                        <th>Quantite</th>
                        <th>Prix unitaire HT</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tfoot>

                    <tr>
                        <td colSpan="4">Montant Ht</td>
                        <td>{montantHt}</td>
                    </tr>

                    <tr>
                        <td colSpan="4">Tva</td>
                        <td>{props.data[0].tva}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">MonTtant TTC</td>
                        <td>{montantHt+(montantHt*(props.data[0].tva/100))}</td>
                    </tr>
                    </tfoot>
                    {props.data.map((value, index) =>
                        <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{value.description}</td>
                            <td>{value.qte}</td>
                            <td>{value.prix}</td>
                            <td>{value.total}€</td>
                        </tr>
                        </tbody>
                    )}
                </Table>
            </Row>
            <Row>

                    <Col>Devis valable jusqu'au :{props.data[0].datevalidite}</Col>

            </Row>
        </Container>
    )
}
else {
    return (
        <div></div>
    )
}
}

export default Result;
