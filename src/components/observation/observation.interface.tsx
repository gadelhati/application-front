import { User } from "../user/user.interface";
import { OM } from "../om/om.interface";

export interface Observation {
    id: string;
    // coordinates?: string; // POINT
    //SECTION 0
    // aabbxx: string; // mimi
    mimi: string;
    mjmj?: string;
    ddddddd?: string;
    a1?: string;
    bw?: string;
    nbnbnb?: string;
    yy?: string;
    gg?: string;
    iw?: string;
    ii?: string;
    iii?: string;
    lalala?: string;
    qc?: string;
    lolololo?: string;
    //SECTION 1
    ir?: string;
    ix?: string;
    h?: string;
    vv?: string;
    n?: string;
    dd?: string;
    ff?: string;
    fff?: string;
    sn1_1?: string;
    ttt?: string;
    sn2_1?: string;
    tdtdtd?: string;
    p0p0p0p0?: string;
    pppp?: string;
    a3?: string;
    hhh?: string;
    a?: string;
    ppp?: string;
    rrr?: string;
    tr?: string;
    ww?: string;
    w1w2?: string,
    // w1?: string;
    // w2?: string;
    wawa?: string;
    wa1?: string;
    wa2?: string;
    nh?: string;
    cl?: string;
    cm?: string;
    ch?: string;
    gggg?: string;
    //SECTION 2
    ds?: string;
    vs?: string;
    ss?: string;
    twtwtw?: string;
    pwapwa?: string;
    hwahwa?: string;
    pwpw?: string;
    hwhw?: string;
    dw1dw1?: string;
    dw2dw2?: string;
    pw1pw1?: string;
    hw1hw1?: string;
    pw2pw2?: string;
    hw2hw2?: string;
    is?: string;
    eses?: string;
    rs?: string;
    hwahwahwa?: string;
    sw?: string;
    tbtbtb?: string;
    ci?: string;
    si?: string;
    bi?: string;
    di?: string;
    zi?: string;
    //SECTION 3
    sn1_3?: string;
    txtxtx?: string;
    sn2_3?: string;
    tntntn?: string;
    ind89?: string;
    p24p24p24?: string;
    //SECTION 5
    ichw?: string;
    icm?: string;
    cs?: string;
    icf?: string;
    icp?: string;
    icq?: string;

    dateObservation?: Date;
    stationName?: string;
    observerName: string;
    
    observer: User;
    station?: OM;
}