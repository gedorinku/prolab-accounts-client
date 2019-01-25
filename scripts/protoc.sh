#!/bin/sh

OUT_DIR="./src/api"
PROTO_DIR="./protos"

ls -l -d $(find ${PROTO_DIR}) | grep -E ".*\.proto" | grep -v google | while read LINE

do
    FILE=`echo ${LINE} | awk '{print $9}'`
    protoc -I=${PROTO_DIR} ${FILE} \
        --js_out=import_style=commonjs:${OUT_DIR} \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${OUT_DIR}
done
