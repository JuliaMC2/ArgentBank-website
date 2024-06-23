import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

async function handleResponse(response) {
  const isJson = response.headers?.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  // vérification du statut du fecth
  if (!response.ok) {
      // récupération du message d'erreur et transmission via Promise.reject qui va déclencher un dispatch(error)
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
  }
  // si on arrive ici, c'est que la connexion a réussi
  return data;
}

async function fetchLogin(url, email, password) {
  const requestBody ={"email":email, "password":password}
  const headers = {"accept": "application/json",
                  "Content-Type": "application/json"}
  const requestOptions = {method:"POST",
                  headers: headers,
                  body: JSON.stringify(requestBody)}
  return fetch(url, requestOptions).then (handleResponse)
}

export const login = createAsyncThunk('token/login',
  async function ( {email, password} , { rejectWithValue }) {
    try {
      // gérer l'appel et retourner le token
      const token = await fetchLogin(`http://localhost:3001/api/v1/user/login`, email, password )

      // connexion réussie
      return(token)

    } catch (error) {
      // connexion échouée
      return rejectWithValue(error)
    }
  }
 )


export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: {
      "value":"",
      "status":"idle",
      "error":""
    },
  },
  reducers: {
    set: (state, action) => {
      state.value.value = action.payload
      state.value.status = "ok"
      state.value.error= ""
    },
    errorOccured: (state, action) => {
      state.value.value = ""
      state.value.status = "ko"
      state.value.error= action.payload
    },
    reset: (state) => {
      state.value.value = ""
      state.value.status="idle"
      state.value.error= ""
    },
    clear: (state) => {
      state.value.status="idle"
      state.value.error= ""
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
          state.value.value=action.payload
          state.value.status="ok"
          state.value.error=""
          window.location.href ="/accounts"
      })
      .addCase(login.rejected, (state, action) => {
        state.value.value=""
        state.value.status="ko"
        state.value.error=action.payload
      })
      .addCase(login.pending, (state) => {
        state.value.status="idle"
      })
  }
})

export const { set, reset, errorOccured, clear } = tokenSlice.actions

export default tokenSlice.reducer