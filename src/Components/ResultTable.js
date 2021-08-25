import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
function ResultTable({ tbl }) {


    return (
        <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Symbole</th>
                        <th>Currency Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tbl.length > 0 ? (
                            tbl.map((data, idx) => {
                                return (
                                    <tr>
                                        <td>{idx}</td>
                                        <td>{data.name}</td>
                                        <td>{data.symbole}</td>
                                        <td>{data.rate}</td>
                                    </tr>
                                )
                            })
                        ) :
                            (
                                Array.from({ length: 12 }).map((_, idx) => {
                                    return (
                                        <tr>
                                            <td>{idx}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ResultTable
