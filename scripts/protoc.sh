#!/bin/sh

OUT_DIR="./src/api"
PROTO_DIR="./protos"

rm -rf $OUT_DIR
mkdir $OUT_DIR
ls -l -d $(find ${PROTO_DIR}) | grep -E ".*\.proto" | while read LINE

do
    FILE=`echo ${LINE} | awk '{print $9}'`
    protoc -I=${PROTO_DIR} ${FILE} \
        --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
        --js_out=import_style=commonjs:${OUT_DIR} \
        --grpc-web_out=import_style=typescript,mode=grpcwebtext:${OUT_DIR}
done
