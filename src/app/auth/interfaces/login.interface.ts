export interface AuthResponse {
    success: boolean;
    data: Usuario;
    message: string;
}

export interface Usuario {
    usu_usuario: string;
    usu_nombre: string;
    per_id: number;
    usu_clave: string;
    usu_identificacion: string;
    usu_correo: string;
    usu_estado: string;
    usu_persona: number;
    creacion_usuario: string;
    creacion_fecha: Date;
    modifica_usuario: string;
    modifica_fecha: Date;
    valor: number;
    token: string;
}
