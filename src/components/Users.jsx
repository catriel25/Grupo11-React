import UsersList from './UsersList';
import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';
import styles from './users.module.css'

function Users() {
    const {users} = useContext(InitDataContext);

    return (
        <div className={styles.container}>
            {/*<!-- MOVIES LIST -->*/}
            <h2>TODOS LOS USUARIOS DE LA BASE DE DATOS</h2>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Id</th>
                                    <th>Usuario</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>E-mail</th>
                                    <th>Telefono</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.data?.map((user, index) => {
                                        return <UsersList  {...user} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
