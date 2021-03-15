import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class ProcessImageRequest extends pb_1.Message {
    constructor(data?: any[] | {
        id?: string;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as unknown as string;
    }
    set id(value: string | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(1, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProcessImageRequest {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProcessImageRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class ProcessImageReply extends pb_1.Message {
    constructor(data?: any[] | {
        image?: string;
        result?: string;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.image = data.image;
            this.result = data.result;
        }
    }
    get image(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as unknown as string;
    }
    set image(value: string | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    get result(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as unknown as string;
    }
    set result(value: string | undefined) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            image: this.image,
            result: this.result
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.image === "string" && this.image.length)
            writer.writeString(1, this.image);
        if (typeof this.result === "string" && this.result.length)
            writer.writeString(2, this.result);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProcessImageReply {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProcessImageReply();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.image = reader.readString();
                    break;
                case 2:
                    message.result = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class CreateEncodingRequest extends pb_1.Message {
    constructor(data?: any[] | {
        user_email?: string;
        image?: string;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.user_email = data.user_email;
            this.image = data.image;
        }
    }
    get user_email(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as unknown as string;
    }
    set user_email(value: string | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    get image(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as unknown as string;
    }
    set image(value: string | undefined) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            user_email: this.user_email,
            image: this.image
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.user_email === "string" && this.user_email.length)
            writer.writeString(1, this.user_email);
        if (typeof this.image === "string" && this.image.length)
            writer.writeString(2, this.image);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateEncodingRequest {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CreateEncodingRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user_email = reader.readString();
                    break;
                case 2:
                    message.image = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class CreateEncodingReply extends pb_1.Message {
    constructor(data?: any[] | {
        encoding?: number[];
        user_email?: string;
        image_name?: string;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.encoding = data.encoding;
            this.user_email = data.user_email;
            this.image_name = data.image_name;
        }
    }
    get encoding(): number[] | undefined {
        return pb_1.Message.getField(this, 1) as number[];
    }
    set encoding(value: number[] | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    get user_email(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as unknown as string;
    }
    set user_email(value: string | undefined) {
        pb_1.Message.setField(this, 2, value);
    }
    get image_name(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as unknown as string;
    }
    set image_name(value: string | undefined) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            encoding: this.encoding,
            user_email: this.user_email,
            image_name: this.image_name
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.encoding !== undefined)
            writer.writePackedFloat(1, this.encoding);
        if (typeof this.user_email === "string" && this.user_email.length)
            writer.writeString(2, this.user_email);
        if (typeof this.image_name === "string" && this.image_name.length)
            writer.writeString(3, this.image_name);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateEncodingReply {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CreateEncodingReply();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.encoding = reader.readPackedFloat();
                    break;
                case 2:
                    message.user_email = reader.readString();
                    break;
                case 3:
                    message.image_name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class DeleteEncodingRequest extends pb_1.Message {
    constructor(data?: any[] | {
        image_name?: string;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.image_name = data.image_name;
        }
    }
    get image_name(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as unknown as string;
    }
    set image_name(value: string | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            image_name: this.image_name
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.image_name === "string" && this.image_name.length)
            writer.writeString(1, this.image_name);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteEncodingRequest {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeleteEncodingRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.image_name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class DeleteEncodingReply extends pb_1.Message {
    constructor(data?: any[] | {
        count?: number;
    }) {
        super();
        // @ts-ignore
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.count = data.count;
        }
    }
    get count(): number | undefined {
        //@ts-ignore
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set count(value: number | undefined) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            count: this.count
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.count !== undefined)
            writer.writeInt32(1, this.count);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteEncodingReply {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeleteEncodingReply();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.count = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
// @ts-ignore
// @ts-ignore
export var ProcessImage = {
    ProcessImage: {
        path: "/ProcessImage/ProcessImage",
        requestStream: false,
        responseStream: true,
        requestType: ProcessImageRequest,
        responseType: ProcessImageReply,
        //@ts-ignore

        requestSerialize: (message: ProcessImageRequest) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => ProcessImageRequest.deserialize(new Uint8Array(bytes)),
        //@ts-ignore

        responseSerialize: (message: ProcessImageReply) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => ProcessImageReply.deserialize(new Uint8Array(bytes))
    },
    CreateEncoding: {
        path: "/ProcessImage/CreateEncoding",
        requestStream: false,
        responseStream: false,
        requestType: CreateEncodingRequest,
        responseType: CreateEncodingReply,
        //@ts-ignore
        requestSerialize: (message: CreateEncodingRequest) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => CreateEncodingRequest.deserialize(new Uint8Array(bytes)),
        //@ts-ignore
        responseSerialize: (message: CreateEncodingReply) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => CreateEncodingReply.deserialize(new Uint8Array(bytes))
    },
    DeleteEncoding: {
        path: "/ProcessImage/DeleteEncoding",
        requestStream: false,
        responseStream: false,
        requestType: DeleteEncodingRequest,
        responseType: DeleteEncodingReply,
        //@ts-ignore
        requestSerialize: (message: DeleteEncodingRequest) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => DeleteEncodingRequest.deserialize(new Uint8Array(bytes)),
        //@ts-ignore
        responseSerialize: (message: DeleteEncodingReply) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => DeleteEncodingReply.deserialize(new Uint8Array(bytes))
    }
};
export class ProcessImageClient extends grpc_1.makeGenericClientConstructor(ProcessImage, "ProcessImage", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials) {
        super(address, credentials)
    }
}
