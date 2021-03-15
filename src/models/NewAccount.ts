export default class NewAccount {
    userName: string | undefined;
    roleID: number | undefined;
    password: string | undefined;
    image: string | undefined;
    frontIdentityCard: string | undefined;
    backIdentityCard: string | undefined;
    address: string | undefined;
    fullName: string | undefined;

    constructor(
        userName: string | undefined,
        roleID: number | undefined,
        password: string | undefined,
        image: string | undefined,
        frontIdentityCard: string | undefined,
        backIdentityCard: string | undefined,
        address: string | undefined,
        fullName: string | undefined
    ) {
        this.userName = userName;
        this.roleID = roleID;
        this.password = password;
        this.image = image;
        this.frontIdentityCard = frontIdentityCard;
        this.backIdentityCard = backIdentityCard;
        this.address = address;
        this.fullName = fullName;
    }
}
