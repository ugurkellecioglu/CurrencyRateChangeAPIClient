import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { Button, Form, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import base_url from '../constants/constant';
import Overlay from './Overlay';
function Searchbar({ setTable }) {
    const [symbole, setSymbole] = useState('')
    const [active, setActive] = useState(true)
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        if (symbole.length !== 0) setActive(false)
        else setActive(true)
    }, [symbole])

    const renderTooltip = (props) => (
        <Tooltip id="text-tooltip" {...props}>
            The symbole you want to see exchange rates against it.
        </Tooltip>
    );
    useEffect(() => {
        setSpinner(true)
        axios.get(base_url + 'USD')
            .then((response) => {
                setTable(response.data[1])
            })
        setTimeout(() => {
            setSpinner(false)
        }, 1000);
    }, [])
    const handleClick = () => {
        setSpinner(true)
        axios.get(base_url + symbole)
            .then((response) => {
                setTable(response.data[1])
            })
        setTimeout(() => {
            setSpinner(false)
        }, 1000);
    };
    return (
        <div>
            {
                spinner ? <Overlay /> : null
            }
            <Form.Group>
                <Form.Label htmlFor="symbole">Currency Symbole</Form.Label>

                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Form.Control
                        type="text"
                        id="symbole"
                        placeholder="USD"
                        onChange={(e) => setSymbole(e.target.value)}
                        aria-describedby="symboleHelp"
                    />
                </OverlayTrigger>
            </Form.Group>
            <Form.Group className="mt-2 d-flex justify-content-end">
                <Button disabled={active} onClick={handleClick}>Search</Button>
            </Form.Group>
        </div>
    )
}

export default Searchbar
