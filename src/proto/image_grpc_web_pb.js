/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./image_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ProcessImageClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ProcessImagePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProcessImageRequest,
 *   !proto.ProcessImageReply>}
 */
const methodDescriptor_ProcessImage_ProcessImage = new grpc.web.MethodDescriptor(
  '/ProcessImage/ProcessImage',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ProcessImageRequest,
  proto.ProcessImageReply,
  /**
   * @param {!proto.ProcessImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProcessImageReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ProcessImageRequest,
 *   !proto.ProcessImageReply>}
 */
const methodInfo_ProcessImage_ProcessImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ProcessImageReply,
  /**
   * @param {!proto.ProcessImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProcessImageReply.deserializeBinary
);


/**
 * @param {!proto.ProcessImageRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ProcessImageReply>}
 *     The XHR Node Readable Stream
 */
proto.ProcessImageClient.prototype.processImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ProcessImage/ProcessImage',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_ProcessImage);
};


/**
 * @param {!proto.ProcessImageRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ProcessImageReply>}
 *     The XHR Node Readable Stream
 */
proto.ProcessImagePromiseClient.prototype.processImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ProcessImage/ProcessImage',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_ProcessImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateEncodingRequest,
 *   !proto.CreateEncodingReply>}
 */
const methodDescriptor_ProcessImage_CreateEncoding = new grpc.web.MethodDescriptor(
  '/ProcessImage/CreateEncoding',
  grpc.web.MethodType.UNARY,
  proto.CreateEncodingRequest,
  proto.CreateEncodingReply,
  /**
   * @param {!proto.CreateEncodingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateEncodingReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateEncodingRequest,
 *   !proto.CreateEncodingReply>}
 */
const methodInfo_ProcessImage_CreateEncoding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateEncodingReply,
  /**
   * @param {!proto.CreateEncodingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateEncodingReply.deserializeBinary
);


/**
 * @param {!proto.CreateEncodingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateEncodingReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateEncodingReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProcessImageClient.prototype.createEncoding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProcessImage/CreateEncoding',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_CreateEncoding,
      callback);
};


/**
 * @param {!proto.CreateEncodingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateEncodingReply>}
 *     Promise that resolves to the response
 */
proto.ProcessImagePromiseClient.prototype.createEncoding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProcessImage/CreateEncoding',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_CreateEncoding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteEncodingRequest,
 *   !proto.DeleteEncodingReply>}
 */
const methodDescriptor_ProcessImage_DeleteEncoding = new grpc.web.MethodDescriptor(
  '/ProcessImage/DeleteEncoding',
  grpc.web.MethodType.UNARY,
  proto.DeleteEncodingRequest,
  proto.DeleteEncodingReply,
  /**
   * @param {!proto.DeleteEncodingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteEncodingReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteEncodingRequest,
 *   !proto.DeleteEncodingReply>}
 */
const methodInfo_ProcessImage_DeleteEncoding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteEncodingReply,
  /**
   * @param {!proto.DeleteEncodingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteEncodingReply.deserializeBinary
);


/**
 * @param {!proto.DeleteEncodingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteEncodingReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteEncodingReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProcessImageClient.prototype.deleteEncoding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProcessImage/DeleteEncoding',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_DeleteEncoding,
      callback);
};


/**
 * @param {!proto.DeleteEncodingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteEncodingReply>}
 *     Promise that resolves to the response
 */
proto.ProcessImagePromiseClient.prototype.deleteEncoding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProcessImage/DeleteEncoding',
      request,
      metadata || {},
      methodDescriptor_ProcessImage_DeleteEncoding);
};


module.exports = proto;

