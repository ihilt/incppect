if 'NOT', 'INCPPECT_NO_SSL'
  OpenSSL_dep = dependency('OpenSSL')
else
  # unset('OPENSSL_LIBRARIES')
  # unset('OPENSSL_INCLUDE_DIR')
endif
if 'APPLE'
  uWS_lib = shared_library('uWS', 'uWebSockets/uSockets/src/context.c', 'uWebSockets/uSockets/src/loop.c', 'uWebSockets/uSockets/src/socket.c', 'uWebSockets/uSockets/src/crypto/openssl.c', 'uWebSockets/uSockets/src/eventing/libuv.c')
  # target_include_directories(['uWS', 'PRIVATE', 'uWebSockets/uSockets/src', libuv_include_dir, openssl_include_dir])
  # target_include_directories(['uWS', 'INTERFACE', 'uWebSockets/uSockets/src', 'uWebSockets/src'])
  # target_link_libraries(['uWS', 'PRIVATE', libuv_libraries])
  # target_link_libraries(['uWS', 'PUBLIC', openssl_libraries, zlib_libraries, cmake_thread_libs_init])
  # target_compile_definitions(['uWS', 'PRIVATE', 'LIBUS_USE_LIBUV=1'])
elif 'WIN32'
  # message(['FATAL_ERROR', 'Windows build not yet supported'])
else
  uWS_lib = shared_library('uWS', 'uWebSockets/uSockets/src/context.c', 'uWebSockets/uSockets/src/loop.c', 'uWebSockets/uSockets/src/socket.c', 'uWebSockets/uSockets/src/crypto/openssl.c', 'uWebSockets/uSockets/src/eventing/epoll_kqueue.c', 'uWebSockets/uSockets/src/eventing/gcd.c')
  # target_include_directories(['uWS', 'PRIVATE', 'uWebSockets/uSockets/src', openssl_include_dir])
  # target_include_directories(['uWS', 'INTERFACE', 'uWebSockets/uSockets/src', 'uWebSockets/src'])
  # target_link_libraries(['uWS', 'PUBLIC', openssl_libraries, zlib_libraries, cmake_thread_libs_init])
endif
if 'INCPPECT_NO_SSL'
  # target_compile_options(['uWS', 'PRIVATE', '-DLIBUS_NO_SSL=1'])
else
  # target_compile_options(['uWS', 'PRIVATE', '-DLIBUS_USE_OPENSSL=1'])
endif
