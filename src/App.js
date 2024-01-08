import { Routes, Route } from "react-router-dom"
import { UserListPage } from './users/UserListPage';
import { UserDetailPage } from './users/UserDetailPage';
import { UserEditPage } from './users/UserEditPage';
import { AddUserPage } from './users/AddUserPage';

export function App(){
  return <div>

      <Routes>
          <Route path="/" element={<UserListPage/>} />
          <Route path="/user/detail/:id" element={<UserDetailPage />} />
          <Route path="/user/edit/:id" element={<UserEditPage />} />
          <Route path="/user/add" element={<AddUserPage />} />
      </Routes>

  </div>
}