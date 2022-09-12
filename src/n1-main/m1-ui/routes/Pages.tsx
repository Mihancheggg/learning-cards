import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from './Login/Login';
import Error404 from './Error404/Error404';
import {CreateUser} from './CreateUser/CreateUser';
import {Profile} from './Profile/Profile';
import {RecoverPassword} from './RecoverPassword/RecoverPassword';
import {NewPassword} from './NewPassword/NewPassword';
import {Test} from './Test/Test';

export const PATH = {
    LOGIN: '/login',
    CREATE_USER: '/createuser',
    PROFILE: '/profile',
    ERROR404: '/404',
    RECOVER_PASSWORD: '/recoverpassword',
    NEW_PASSWORD: '/newpassword',
    TEST: '/test',
}

export const Pages = () => {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.CREATE_USER} element={<CreateUser/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}
