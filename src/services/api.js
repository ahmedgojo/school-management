// Centralized API service for communicating with the Laravel backend.
// All requests automatically include the Sanctum Bearer token from localStorage.

const API_BASE = 'http://localhost:8000/api';

function getToken() {
  return localStorage.getItem('auth_token');
}

async function request(method, endpoint, body = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = { method, headers };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw data; // Throw the full error object for caller to handle
  }

  return data;
}

// Auth
export const authApi = {
  login: (email, password) => request('POST', '/login', { email, password }),
  register: (userData) => request('POST', '/register', userData),
  logout: () => request('POST', '/logout'),
  getUser: () => request('GET', '/user'),
};

// Users (Admin Directory)
export const usersApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request('GET', `/users${query ? '?' + query : ''}`);
  },
  update: (id, data) => request('PUT', `/users/${id}`, data),
  delete: (id) => request('DELETE', `/users/${id}`),
};

// Students
export const studentsApi = {
  getAll: () => request('GET', '/students'),
  getById: (id) => request('GET', `/students/${id}`),
  create: (data) => request('POST', '/students', data),
  update: (id, data) => request('PUT', `/students/${id}`, data),
  delete: (id) => request('DELETE', `/students/${id}`),
};

// Teachers
export const teachersApi = {
  getAll: () => request('GET', '/teachers'),
  getById: (id) => request('GET', `/teachers/${id}`),
  create: (data) => request('POST', '/teachers', data),
  update: (id, data) => request('PUT', `/teachers/${id}`, data),
};

// Classes
export const classesApi = {
  getAll: () => request('GET', '/classes'),
  getById: (id) => request('GET', `/classes/${id}`),
  create: (data) => request('POST', '/classes', data),
  update: (id, data) => request('PUT', `/classes/${id}`, data),
};

// Courses
export const coursesApi = {
  getAll: () => request('GET', '/courses'),
  create: (data) => request('POST', '/courses', data),
};

// Attendance
export const attendanceApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request('GET', `/attendance${query ? '?' + query : ''}`);
  },
  mark: (data) => request('POST', '/attendance', data),
  batchMark: (date, records) => request('POST', '/attendance/batch', { date, attendance: records }),
};

// Grades
export const gradesApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request('GET', `/grades${query ? '?' + query : ''}`);
  },
  getStudentGrades: (studentId) => request('GET', `/grades/student/${studentId}`),
  save: (data) => request('POST', '/grades', data),
};

// Assignments
export const assignmentsApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request('GET', `/assignments${query ? '?' + query : ''}`);
  },
  create: (data) => request('POST', '/assignments', data),
};

// Payments
export const paymentsApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request('GET', `/payments${query ? '?' + query : ''}`);
  },
  create: (data) => request('POST', '/payments', data),
};

// Messages
export const messagesApi = {
  getInbox: () => request('GET', '/messages'),
  getConversation: (userId) => request('GET', `/messages/conversation/${userId}`),
  send: (receiverId, content) => request('POST', '/messages', { receiver_id: receiverId, content }),
  markAsRead: (id) => request('PUT', `/messages/${id}/read`),
};

// Notifications
export const notificationsApi = {
  getAll: () => request('GET', '/notifications'),
  markRead: (id = null) => request('PUT', '/notifications/read', id ? { id } : {}),
};
