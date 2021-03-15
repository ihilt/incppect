# file(['READ', 'incppect.js', 'src_incppect_js'])
# configure_file([cmake_current_source_dir, '/common.h.in', cmake_current_source_dir, '/common.h', '@ONLY'])
incppect_lib = shared_library('incppect', 'incppect.cpp')
# target_include_directories(['incppect', 'PUBLIC', '../include'])
# target_include_directories(['incppect', 'PRIVATE', '.'])
# target_link_libraries(['incppect', 'PRIVATE', 'uWS'])
if 'INCPPECT_DEBUG'
  # target_compile_definitions(['incppect', 'PRIVATE', 'INCPPECT_DEBUG=1'])
endif
