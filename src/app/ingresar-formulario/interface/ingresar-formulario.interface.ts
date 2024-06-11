export interface FormularioIngresoInterface {
    enc_id: number;
    enc_nombre: string;
    secciones: SeccionIngresoInterface[];
}

export interface SeccionIngresoInterface {
    sec_id: number;
    sec_nombre: string;
    sec_uuid: string;
    preguntas: PreguntaIngresoInterface[];
}

export interface PreguntaIngresoInterface {
    pre_id: number;
    pre_nombre: string;
    pre_tipo: string;
    pre_uuid: string;
    opciones: OpcionIngresoInterface[];
    valor: any;
}

export interface OpcionIngresoInterface {
    opc_id: number;
    opc_nombre: string;
    opc_uuid: string;
}
