# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/registration/join.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/registration/join.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.registration.JoinTeamRequest" do
      optional :invite_token, :string, 1
      optional :name, :string, 2
    end
    add_message "isuxportal.proto.services.registration.JoinTeamResponse" do
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Registration
        JoinTeamRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.registration.JoinTeamRequest").msgclass
        JoinTeamResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.registration.JoinTeamResponse").msgclass
      end
    end
  end
end