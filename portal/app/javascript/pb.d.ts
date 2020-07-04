import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace isuxportal. */
export namespace isuxportal {

    /** Namespace proto. */
    namespace proto {

        /** Namespace resources. */
        namespace resources {

            /** Properties of a BenchmarkJob. */
            interface IBenchmarkJob {

                /** BenchmarkJob id */
                id?: (number|Long|null);

                /** BenchmarkJob teamId */
                teamId?: (number|Long|null);

                /** BenchmarkJob targetId */
                targetId?: (number|Long|null);

                /** BenchmarkJob status */
                status?: (isuxportal.proto.resources.BenchmarkJob.Status|null);

                /** BenchmarkJob result */
                result?: (isuxportal.proto.resources.IBenchmarkResult|null);

                /** BenchmarkJob createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob startedAt */
                startedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob finishedAt */
                finishedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob team */
                team?: (isuxportal.proto.resources.ITeam|null);

                /** BenchmarkJob target */
                target?: (isuxportal.proto.resources.IContestantInstance|null);
            }

            /** Represents a BenchmarkJob. */
            class BenchmarkJob implements IBenchmarkJob {

                /**
                 * Constructs a new BenchmarkJob.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IBenchmarkJob);

                /** BenchmarkJob id. */
                public id: (number|Long);

                /** BenchmarkJob teamId. */
                public teamId: (number|Long);

                /** BenchmarkJob targetId. */
                public targetId: (number|Long);

                /** BenchmarkJob status. */
                public status: isuxportal.proto.resources.BenchmarkJob.Status;

                /** BenchmarkJob result. */
                public result?: (isuxportal.proto.resources.IBenchmarkResult|null);

                /** BenchmarkJob createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob startedAt. */
                public startedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob finishedAt. */
                public finishedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /** BenchmarkJob target. */
                public target?: (isuxportal.proto.resources.IContestantInstance|null);

                /**
                 * Creates a new BenchmarkJob instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BenchmarkJob instance
                 */
                public static create(properties?: isuxportal.proto.resources.IBenchmarkJob): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Encodes the specified BenchmarkJob message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @param message BenchmarkJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IBenchmarkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BenchmarkJob message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @param message BenchmarkJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IBenchmarkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Verifies a BenchmarkJob message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BenchmarkJob message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BenchmarkJob
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Creates a plain object from a BenchmarkJob message. Also converts values to other types if specified.
                 * @param message BenchmarkJob
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.BenchmarkJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BenchmarkJob to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BenchmarkJob {

                /** Status enum. */
                enum Status {
                    PENDING = 0,
                    RUNNING = 1,
                    ERRORED = 2,
                    CANCELLED = 3,
                    FINISHED = 4
                }
            }

            /** Properties of a BenchmarkResult. */
            interface IBenchmarkResult {

                /** BenchmarkResult finished */
                finished?: (boolean|null);

                /** BenchmarkResult passed */
                passed?: (boolean|null);

                /** BenchmarkResult score */
                score?: (number|Long|null);

                /** BenchmarkResult scoreBreakdown */
                scoreBreakdown?: (isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null);

                /** BenchmarkResult reason */
                reason?: (string|null);

                /** BenchmarkResult stdout */
                stdout?: (string|null);

                /** BenchmarkResult stderr */
                stderr?: (string|null);

                /** BenchmarkResult survey */
                survey?: (isuxportal.proto.resources.BenchmarkResult.ISurvey|null);
            }

            /** Represents a BenchmarkResult. */
            class BenchmarkResult implements IBenchmarkResult {

                /**
                 * Constructs a new BenchmarkResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IBenchmarkResult);

                /** BenchmarkResult finished. */
                public finished: boolean;

                /** BenchmarkResult passed. */
                public passed: boolean;

                /** BenchmarkResult score. */
                public score: (number|Long);

                /** BenchmarkResult scoreBreakdown. */
                public scoreBreakdown?: (isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null);

                /** BenchmarkResult reason. */
                public reason: string;

                /** BenchmarkResult stdout. */
                public stdout: string;

                /** BenchmarkResult stderr. */
                public stderr: string;

                /** BenchmarkResult survey. */
                public survey?: (isuxportal.proto.resources.BenchmarkResult.ISurvey|null);

                /**
                 * Creates a new BenchmarkResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BenchmarkResult instance
                 */
                public static create(properties?: isuxportal.proto.resources.IBenchmarkResult): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Encodes the specified BenchmarkResult message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @param message BenchmarkResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IBenchmarkResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BenchmarkResult message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @param message BenchmarkResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IBenchmarkResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Verifies a BenchmarkResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BenchmarkResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BenchmarkResult
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Creates a plain object from a BenchmarkResult message. Also converts values to other types if specified.
                 * @param message BenchmarkResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.BenchmarkResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BenchmarkResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BenchmarkResult {

                /** Properties of a ScoreBreakdown. */
                interface IScoreBreakdown {

                    /** ScoreBreakdown base */
                    base?: (number|Long|null);

                    /** ScoreBreakdown deduction */
                    deduction?: (number|Long|null);
                }

                /** Represents a ScoreBreakdown. */
                class ScoreBreakdown implements IScoreBreakdown {

                    /**
                     * Constructs a new ScoreBreakdown.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown);

                    /** ScoreBreakdown base. */
                    public base: (number|Long);

                    /** ScoreBreakdown deduction. */
                    public deduction: (number|Long);

                    /**
                     * Creates a new ScoreBreakdown instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreBreakdown instance
                     */
                    public static create(properties?: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Encodes the specified ScoreBreakdown message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @param message ScoreBreakdown message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreBreakdown message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @param message ScoreBreakdown message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Verifies a ScoreBreakdown message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreBreakdown message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreBreakdown
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Creates a plain object from a ScoreBreakdown message. Also converts values to other types if specified.
                     * @param message ScoreBreakdown
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreBreakdown to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Survey. */
                interface ISurvey {

                    /** Survey language */
                    language?: (string|null);
                }

                /** Represents a Survey. */
                class Survey implements ISurvey {

                    /**
                     * Constructs a new Survey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.BenchmarkResult.ISurvey);

                    /** Survey language. */
                    public language: string;

                    /**
                     * Creates a new Survey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Survey instance
                     */
                    public static create(properties?: isuxportal.proto.resources.BenchmarkResult.ISurvey): isuxportal.proto.resources.BenchmarkResult.Survey;

                    /**
                     * Encodes the specified Survey message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Survey.verify|verify} messages.
                     * @param message Survey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.BenchmarkResult.ISurvey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Survey message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Survey.verify|verify} messages.
                     * @param message Survey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.BenchmarkResult.ISurvey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Survey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Survey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult.Survey;

                    /**
                     * Decodes a Survey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Survey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult.Survey;

                    /**
                     * Verifies a Survey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Survey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Survey
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult.Survey;

                    /**
                     * Creates a plain object from a Survey message. Also converts values to other types if specified.
                     * @param message Survey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.BenchmarkResult.Survey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Survey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ContestantInstance. */
            interface IContestantInstance {

                /** ContestantInstance cloudId */
                cloudId?: (string|null);

                /** ContestantInstance teamId */
                teamId?: (number|Long|null);

                /** ContestantInstance number */
                number?: (number|Long|null);

                /** ContestantInstance publicIpv4Address */
                publicIpv4Address?: (string|null);

                /** ContestantInstance privateIpv4Address */
                privateIpv4Address?: (string|null);

                /** ContestantInstance status */
                status?: (isuxportal.proto.resources.ContestantInstance.Status|null);

                /** ContestantInstance team */
                team?: (isuxportal.proto.resources.ITeam|null);
            }

            /** Represents a ContestantInstance. */
            class ContestantInstance implements IContestantInstance {

                /**
                 * Constructs a new ContestantInstance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IContestantInstance);

                /** ContestantInstance cloudId. */
                public cloudId: string;

                /** ContestantInstance teamId. */
                public teamId: (number|Long);

                /** ContestantInstance number. */
                public number: (number|Long);

                /** ContestantInstance publicIpv4Address. */
                public publicIpv4Address: string;

                /** ContestantInstance privateIpv4Address. */
                public privateIpv4Address: string;

                /** ContestantInstance status. */
                public status: isuxportal.proto.resources.ContestantInstance.Status;

                /** ContestantInstance team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /**
                 * Creates a new ContestantInstance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContestantInstance instance
                 */
                public static create(properties?: isuxportal.proto.resources.IContestantInstance): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Encodes the specified ContestantInstance message. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @param message ContestantInstance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IContestantInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContestantInstance message, length delimited. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @param message ContestantInstance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IContestantInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Verifies a ContestantInstance message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContestantInstance message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContestantInstance
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Creates a plain object from a ContestantInstance message. Also converts values to other types if specified.
                 * @param message ContestantInstance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.ContestantInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContestantInstance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ContestantInstance {

                /** Status enum. */
                enum Status {
                    UNKNOWN = 0,
                    PENDING = 1,
                    MODIFYING = 2,
                    STOPPED = 3,
                    RUNNING = 4,
                    TERMINATED = 5
                }
            }

            /** Properties of a Team. */
            interface ITeam {

                /** Team id */
                id?: (number|Long|null);

                /** Team name */
                name?: (string|null);

                /** Team leaderId */
                leaderId?: (number|Long|null);

                /** Team memberIds */
                memberIds?: ((number|Long)[]|null);

                /** Team finalParticipation */
                finalParticipation?: (boolean|null);

                /** Team hidden */
                hidden?: (boolean|null);

                /** Team withdrawn */
                withdrawn?: (boolean|null);

                /** Team detail */
                detail?: (isuxportal.proto.resources.Team.ITeamDetail|null);

                /** Team leader */
                leader?: (isuxportal.proto.resources.IContestant|null);

                /** Team members */
                members?: (isuxportal.proto.resources.IContestant[]|null);
            }

            /** Represents a Team. */
            class Team implements ITeam {

                /**
                 * Constructs a new Team.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.ITeam);

                /** Team id. */
                public id: (number|Long);

                /** Team name. */
                public name: string;

                /** Team leaderId. */
                public leaderId: (number|Long);

                /** Team memberIds. */
                public memberIds: (number|Long)[];

                /** Team finalParticipation. */
                public finalParticipation: boolean;

                /** Team hidden. */
                public hidden: boolean;

                /** Team withdrawn. */
                public withdrawn: boolean;

                /** Team detail. */
                public detail?: (isuxportal.proto.resources.Team.ITeamDetail|null);

                /** Team leader. */
                public leader?: (isuxportal.proto.resources.IContestant|null);

                /** Team members. */
                public members: isuxportal.proto.resources.IContestant[];

                /**
                 * Creates a new Team instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Team instance
                 */
                public static create(properties?: isuxportal.proto.resources.ITeam): isuxportal.proto.resources.Team;

                /**
                 * Encodes the specified Team message. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @param message Team message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Team message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @param message Team message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Team message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Team;

                /**
                 * Decodes a Team message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Team;

                /**
                 * Verifies a Team message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Team message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Team
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Team;

                /**
                 * Creates a plain object from a Team message. Also converts values to other types if specified.
                 * @param message Team
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Team to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Team {

                /** Properties of a TeamDetail. */
                interface ITeamDetail {

                    /** TeamDetail emailAddress */
                    emailAddress?: (string|null);

                    /** TeamDetail benchmarkTargetId */
                    benchmarkTargetId?: (number|Long|null);

                    /** TeamDetail inviteToken */
                    inviteToken?: (string|null);
                }

                /** Represents a TeamDetail. */
                class TeamDetail implements ITeamDetail {

                    /**
                     * Constructs a new TeamDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Team.ITeamDetail);

                    /** TeamDetail emailAddress. */
                    public emailAddress: string;

                    /** TeamDetail benchmarkTargetId. */
                    public benchmarkTargetId: (number|Long);

                    /** TeamDetail inviteToken. */
                    public inviteToken: string;

                    /**
                     * Creates a new TeamDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TeamDetail instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Team.ITeamDetail): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Encodes the specified TeamDetail message. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @param message TeamDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Team.ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @param message TeamDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Team.ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Verifies a TeamDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TeamDetail
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
                     * @param message TeamDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Team.TeamDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TeamDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Contestant. */
            interface IContestant {

                /** Contestant id */
                id?: (number|Long|null);

                /** Contestant teamId */
                teamId?: (number|Long|null);

                /** Contestant name */
                name?: (string|null);

                /** Contestant contestantDetail */
                contestantDetail?: (isuxportal.proto.resources.Contestant.IContestantDetail|null);
            }

            /** Represents a Contestant. */
            class Contestant implements IContestant {

                /**
                 * Constructs a new Contestant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IContestant);

                /** Contestant id. */
                public id: (number|Long);

                /** Contestant teamId. */
                public teamId: (number|Long);

                /** Contestant name. */
                public name: string;

                /** Contestant contestantDetail. */
                public contestantDetail?: (isuxportal.proto.resources.Contestant.IContestantDetail|null);

                /**
                 * Creates a new Contestant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Contestant instance
                 */
                public static create(properties?: isuxportal.proto.resources.IContestant): isuxportal.proto.resources.Contestant;

                /**
                 * Encodes the specified Contestant message. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @param message Contestant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IContestant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Contestant message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @param message Contestant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IContestant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Contestant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Contestant;

                /**
                 * Decodes a Contestant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Contestant;

                /**
                 * Verifies a Contestant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Contestant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Contestant
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Contestant;

                /**
                 * Creates a plain object from a Contestant message. Also converts values to other types if specified.
                 * @param message Contestant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Contestant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Contestant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Contestant {

                /** Properties of a ContestantDetail. */
                interface IContestantDetail {

                    /** ContestantDetail githubLogin */
                    githubLogin?: (string|null);

                    /** ContestantDetail discordTag */
                    discordTag?: (string|null);

                    /** ContestantDetail isStudent */
                    isStudent?: (boolean|null);

                    /** ContestantDetail avatarUrl */
                    avatarUrl?: (string|null);
                }

                /** Represents a ContestantDetail. */
                class ContestantDetail implements IContestantDetail {

                    /**
                     * Constructs a new ContestantDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Contestant.IContestantDetail);

                    /** ContestantDetail githubLogin. */
                    public githubLogin: string;

                    /** ContestantDetail discordTag. */
                    public discordTag: string;

                    /** ContestantDetail isStudent. */
                    public isStudent: boolean;

                    /** ContestantDetail avatarUrl. */
                    public avatarUrl: string;

                    /**
                     * Creates a new ContestantDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContestantDetail instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Contestant.IContestantDetail): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Encodes the specified ContestantDetail message. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @param message ContestantDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Contestant.IContestantDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContestantDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @param message ContestantDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Contestant.IContestantDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Verifies a ContestantDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContestantDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContestantDetail
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Creates a plain object from a ContestantDetail message. Also converts values to other types if specified.
                     * @param message ContestantDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Contestant.ContestantDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContestantDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Clarification. */
            interface IClarification {

                /** Clarification id */
                id?: (number|Long|null);

                /** Clarification teamId */
                teamId?: (number|Long|null);

                /** Clarification answered */
                answered?: (boolean|null);

                /** Clarification disclosed */
                disclosed?: (boolean|null);

                /** Clarification question */
                question?: (string|null);

                /** Clarification answer */
                answer?: (string|null);

                /** Clarification createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Clarification answeredAt */
                answeredAt?: (google.protobuf.ITimestamp|null);

                /** Clarification team */
                team?: (isuxportal.proto.resources.ITeam|null);
            }

            /** Represents a Clarification. */
            class Clarification implements IClarification {

                /**
                 * Constructs a new Clarification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IClarification);

                /** Clarification id. */
                public id: (number|Long);

                /** Clarification teamId. */
                public teamId: (number|Long);

                /** Clarification answered. */
                public answered: boolean;

                /** Clarification disclosed. */
                public disclosed: boolean;

                /** Clarification question. */
                public question: string;

                /** Clarification answer. */
                public answer: string;

                /** Clarification createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Clarification answeredAt. */
                public answeredAt?: (google.protobuf.ITimestamp|null);

                /** Clarification team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /**
                 * Creates a new Clarification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Clarification instance
                 */
                public static create(properties?: isuxportal.proto.resources.IClarification): isuxportal.proto.resources.Clarification;

                /**
                 * Encodes the specified Clarification message. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @param message Clarification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IClarification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Clarification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @param message Clarification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IClarification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Clarification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Clarification;

                /**
                 * Decodes a Clarification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Clarification;

                /**
                 * Verifies a Clarification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Clarification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Clarification
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Clarification;

                /**
                 * Creates a plain object from a Clarification message. Also converts values to other types if specified.
                 * @param message Clarification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Clarification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Clarification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Staff. */
            interface IStaff {

                /** Staff id */
                id?: (number|Long|null);

                /** Staff githubLogin */
                githubLogin?: (string|null);
            }

            /** Represents a Staff. */
            class Staff implements IStaff {

                /**
                 * Constructs a new Staff.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IStaff);

                /** Staff id. */
                public id: (number|Long);

                /** Staff githubLogin. */
                public githubLogin: string;

                /**
                 * Creates a new Staff instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Staff instance
                 */
                public static create(properties?: isuxportal.proto.resources.IStaff): isuxportal.proto.resources.Staff;

                /**
                 * Encodes the specified Staff message. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @param message Staff message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IStaff, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Staff message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @param message Staff message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IStaff, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Staff message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Staff;

                /**
                 * Decodes a Staff message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Staff;

                /**
                 * Verifies a Staff message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Staff message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Staff
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Staff;

                /**
                 * Creates a plain object from a Staff message. Also converts values to other types if specified.
                 * @param message Staff
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Staff, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Staff to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace services. */
        namespace services {

            /** Namespace audience. */
            namespace audience {

                /** Properties of a ListTeamRequest. */
                interface IListTeamRequest {
                }

                /** Represents a ListTeamRequest. */
                class ListTeamRequest implements IListTeamRequest {

                    /**
                     * Constructs a new ListTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IListTeamRequest);

                    /**
                     * Creates a new ListTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IListTeamRequest): isuxportal.proto.services.audience.ListTeamRequest;

                    /**
                     * Encodes the specified ListTeamRequest message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamRequest.verify|verify} messages.
                     * @param message ListTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IListTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamRequest.verify|verify} messages.
                     * @param message ListTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IListTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamRequest;

                    /**
                     * Decodes a ListTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamRequest;

                    /**
                     * Verifies a ListTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamRequest;

                    /**
                     * Creates a plain object from a ListTeamRequest message. Also converts values to other types if specified.
                     * @param message ListTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.ListTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTeamResponse. */
                interface IListTeamResponse {

                    /** ListTeamResponse teams */
                    teams?: (isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem[]|null);
                }

                /** Represents a ListTeamResponse. */
                class ListTeamResponse implements IListTeamResponse {

                    /**
                     * Constructs a new ListTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IListTeamResponse);

                    /** ListTeamResponse teams. */
                    public teams: isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem[];

                    /**
                     * Creates a new ListTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IListTeamResponse): isuxportal.proto.services.audience.ListTeamResponse;

                    /**
                     * Encodes the specified ListTeamResponse message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamResponse.verify|verify} messages.
                     * @param message ListTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IListTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamResponse.verify|verify} messages.
                     * @param message ListTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IListTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamResponse;

                    /**
                     * Decodes a ListTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamResponse;

                    /**
                     * Verifies a ListTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamResponse;

                    /**
                     * Creates a plain object from a ListTeamResponse message. Also converts values to other types if specified.
                     * @param message ListTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.ListTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListTeamResponse {

                    /** Properties of a TeamListItem. */
                    interface ITeamListItem {

                        /** TeamListItem teamId */
                        teamId?: (number|Long|null);

                        /** TeamListItem name */
                        name?: (string|null);

                        /** TeamListItem memberNames */
                        memberNames?: (string[]|null);

                        /** TeamListItem finalParticipation */
                        finalParticipation?: (boolean|null);
                    }

                    /** Represents a TeamListItem. */
                    class TeamListItem implements ITeamListItem {

                        /**
                         * Constructs a new TeamListItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem);

                        /** TeamListItem teamId. */
                        public teamId: (number|Long);

                        /** TeamListItem name. */
                        public name: string;

                        /** TeamListItem memberNames. */
                        public memberNames: string[];

                        /** TeamListItem finalParticipation. */
                        public finalParticipation: boolean;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TeamListItem instance
                         */
                        public static create(properties?: isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem): isuxportal.proto.services.audience.ListTeamResponse.TeamListItem;

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: isuxportal.proto.services.audience.ListTeamResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamResponse.TeamListItem;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamResponse.TeamListItem;

                        /**
                         * Verifies a TeamListItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TeamListItem
                         */
                        public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamResponse.TeamListItem;

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @param message TeamListItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: isuxportal.proto.services.audience.ListTeamResponse.TeamListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace bench. */
            namespace bench {

                /** Represents a BenchmarkQueueService */
                class BenchmarkQueueService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BenchmarkQueueService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BenchmarkQueueService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BenchmarkQueueService;

                    /**
                     * Calls ReceiveBenchmarkJob.
                     * @param request ReceiveBenchmarkJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReceiveBenchmarkJobResponse
                     */
                    public receiveBenchmarkJob(request: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest, callback: isuxportal.proto.services.bench.BenchmarkQueueService.ReceiveBenchmarkJobCallback): void;

                    /**
                     * Calls ReceiveBenchmarkJob.
                     * @param request ReceiveBenchmarkJobRequest message or plain object
                     * @returns Promise
                     */
                    public receiveBenchmarkJob(request: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest): Promise<isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse>;
                }

                namespace BenchmarkQueueService {

                    /**
                     * Callback as used by {@link isuxportal.proto.services.bench.BenchmarkQueueService#receiveBenchmarkJob}.
                     * @param error Error, if any
                     * @param [response] ReceiveBenchmarkJobResponse
                     */
                    type ReceiveBenchmarkJobCallback = (error: (Error|null), response?: isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse) => void;
                }

                /** Properties of a ReceiveBenchmarkJobRequest. */
                interface IReceiveBenchmarkJobRequest {

                    /** ReceiveBenchmarkJobRequest instanceName */
                    instanceName?: (string|null);

                    /** ReceiveBenchmarkJobRequest teamId */
                    teamId?: (number|Long|null);
                }

                /** Represents a ReceiveBenchmarkJobRequest. */
                class ReceiveBenchmarkJobRequest implements IReceiveBenchmarkJobRequest {

                    /**
                     * Constructs a new ReceiveBenchmarkJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest);

                    /** ReceiveBenchmarkJobRequest instanceName. */
                    public instanceName: string;

                    /** ReceiveBenchmarkJobRequest teamId. */
                    public teamId: (number|Long);

                    /**
                     * Creates a new ReceiveBenchmarkJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReceiveBenchmarkJobRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest): isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest;

                    /**
                     * Encodes the specified ReceiveBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest.verify|verify} messages.
                     * @param message ReceiveBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReceiveBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest.verify|verify} messages.
                     * @param message ReceiveBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.bench.IReceiveBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReceiveBenchmarkJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReceiveBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest;

                    /**
                     * Decodes a ReceiveBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReceiveBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest;

                    /**
                     * Verifies a ReceiveBenchmarkJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReceiveBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReceiveBenchmarkJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest;

                    /**
                     * Creates a plain object from a ReceiveBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @param message ReceiveBenchmarkJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.bench.ReceiveBenchmarkJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReceiveBenchmarkJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReceiveBenchmarkJobResponse. */
                interface IReceiveBenchmarkJobResponse {

                    /** ReceiveBenchmarkJobResponse jobId */
                    jobId?: (number|Long|null);

                    /** ReceiveBenchmarkJobResponse handle */
                    handle?: (string|null);

                    /** ReceiveBenchmarkJobResponse targetIpv4Address */
                    targetIpv4Address?: (string|null);

                    /** ReceiveBenchmarkJobResponse descriptionHuman */
                    descriptionHuman?: (string|null);
                }

                /** Represents a ReceiveBenchmarkJobResponse. */
                class ReceiveBenchmarkJobResponse implements IReceiveBenchmarkJobResponse {

                    /**
                     * Constructs a new ReceiveBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.bench.IReceiveBenchmarkJobResponse);

                    /** ReceiveBenchmarkJobResponse jobId. */
                    public jobId: (number|Long);

                    /** ReceiveBenchmarkJobResponse handle. */
                    public handle: string;

                    /** ReceiveBenchmarkJobResponse targetIpv4Address. */
                    public targetIpv4Address: string;

                    /** ReceiveBenchmarkJobResponse descriptionHuman. */
                    public descriptionHuman: string;

                    /**
                     * Creates a new ReceiveBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReceiveBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.bench.IReceiveBenchmarkJobResponse): isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse;

                    /**
                     * Encodes the specified ReceiveBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse.verify|verify} messages.
                     * @param message ReceiveBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.bench.IReceiveBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReceiveBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse.verify|verify} messages.
                     * @param message ReceiveBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.bench.IReceiveBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReceiveBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReceiveBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse;

                    /**
                     * Decodes a ReceiveBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReceiveBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse;

                    /**
                     * Verifies a ReceiveBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReceiveBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReceiveBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse;

                    /**
                     * Creates a plain object from a ReceiveBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message ReceiveBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.bench.ReceiveBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReceiveBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a BenchmarkReportService */
                class BenchmarkReportService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BenchmarkReportService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BenchmarkReportService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BenchmarkReportService;

                    /**
                     * Calls ReportBenchmarkResult.
                     * @param request ReportBenchmarkResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReportBenchmarkResultResponse
                     */
                    public reportBenchmarkResult(request: isuxportal.proto.services.bench.IReportBenchmarkResultRequest, callback: isuxportal.proto.services.bench.BenchmarkReportService.ReportBenchmarkResultCallback): void;

                    /**
                     * Calls ReportBenchmarkResult.
                     * @param request ReportBenchmarkResultRequest message or plain object
                     * @returns Promise
                     */
                    public reportBenchmarkResult(request: isuxportal.proto.services.bench.IReportBenchmarkResultRequest): Promise<isuxportal.proto.services.bench.ReportBenchmarkResultResponse>;

                    /**
                     * Calls StreamBenchmarkResult.
                     * @param request ReportBenchmarkResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReportBenchmarkResultResponse
                     */
                    public streamBenchmarkResult(request: isuxportal.proto.services.bench.IReportBenchmarkResultRequest, callback: isuxportal.proto.services.bench.BenchmarkReportService.StreamBenchmarkResultCallback): void;

                    /**
                     * Calls StreamBenchmarkResult.
                     * @param request ReportBenchmarkResultRequest message or plain object
                     * @returns Promise
                     */
                    public streamBenchmarkResult(request: isuxportal.proto.services.bench.IReportBenchmarkResultRequest): Promise<isuxportal.proto.services.bench.ReportBenchmarkResultResponse>;
                }

                namespace BenchmarkReportService {

                    /**
                     * Callback as used by {@link isuxportal.proto.services.bench.BenchmarkReportService#reportBenchmarkResult}.
                     * @param error Error, if any
                     * @param [response] ReportBenchmarkResultResponse
                     */
                    type ReportBenchmarkResultCallback = (error: (Error|null), response?: isuxportal.proto.services.bench.ReportBenchmarkResultResponse) => void;

                    /**
                     * Callback as used by {@link isuxportal.proto.services.bench.BenchmarkReportService#streamBenchmarkResult}.
                     * @param error Error, if any
                     * @param [response] ReportBenchmarkResultResponse
                     */
                    type StreamBenchmarkResultCallback = (error: (Error|null), response?: isuxportal.proto.services.bench.ReportBenchmarkResultResponse) => void;
                }

                /** Properties of a ReportBenchmarkResultRequest. */
                interface IReportBenchmarkResultRequest {

                    /** ReportBenchmarkResultRequest jobId */
                    jobId?: (number|Long|null);

                    /** ReportBenchmarkResultRequest handle */
                    handle?: (string|null);

                    /** ReportBenchmarkResultRequest result */
                    result?: (isuxportal.proto.resources.IBenchmarkResult|null);
                }

                /** Represents a ReportBenchmarkResultRequest. */
                class ReportBenchmarkResultRequest implements IReportBenchmarkResultRequest {

                    /**
                     * Constructs a new ReportBenchmarkResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.bench.IReportBenchmarkResultRequest);

                    /** ReportBenchmarkResultRequest jobId. */
                    public jobId: (number|Long);

                    /** ReportBenchmarkResultRequest handle. */
                    public handle: string;

                    /** ReportBenchmarkResultRequest result. */
                    public result?: (isuxportal.proto.resources.IBenchmarkResult|null);

                    /**
                     * Creates a new ReportBenchmarkResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportBenchmarkResultRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.bench.IReportBenchmarkResultRequest): isuxportal.proto.services.bench.ReportBenchmarkResultRequest;

                    /**
                     * Encodes the specified ReportBenchmarkResultRequest message. Does not implicitly {@link isuxportal.proto.services.bench.ReportBenchmarkResultRequest.verify|verify} messages.
                     * @param message ReportBenchmarkResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.bench.IReportBenchmarkResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportBenchmarkResultRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.bench.ReportBenchmarkResultRequest.verify|verify} messages.
                     * @param message ReportBenchmarkResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.bench.IReportBenchmarkResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportBenchmarkResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportBenchmarkResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.bench.ReportBenchmarkResultRequest;

                    /**
                     * Decodes a ReportBenchmarkResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportBenchmarkResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.bench.ReportBenchmarkResultRequest;

                    /**
                     * Verifies a ReportBenchmarkResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportBenchmarkResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportBenchmarkResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.bench.ReportBenchmarkResultRequest;

                    /**
                     * Creates a plain object from a ReportBenchmarkResultRequest message. Also converts values to other types if specified.
                     * @param message ReportBenchmarkResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.bench.ReportBenchmarkResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportBenchmarkResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReportBenchmarkResultResponse. */
                interface IReportBenchmarkResultResponse {
                }

                /** Represents a ReportBenchmarkResultResponse. */
                class ReportBenchmarkResultResponse implements IReportBenchmarkResultResponse {

                    /**
                     * Constructs a new ReportBenchmarkResultResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.bench.IReportBenchmarkResultResponse);

                    /**
                     * Creates a new ReportBenchmarkResultResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportBenchmarkResultResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.bench.IReportBenchmarkResultResponse): isuxportal.proto.services.bench.ReportBenchmarkResultResponse;

                    /**
                     * Encodes the specified ReportBenchmarkResultResponse message. Does not implicitly {@link isuxportal.proto.services.bench.ReportBenchmarkResultResponse.verify|verify} messages.
                     * @param message ReportBenchmarkResultResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.bench.IReportBenchmarkResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportBenchmarkResultResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.bench.ReportBenchmarkResultResponse.verify|verify} messages.
                     * @param message ReportBenchmarkResultResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.bench.IReportBenchmarkResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportBenchmarkResultResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportBenchmarkResultResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.bench.ReportBenchmarkResultResponse;

                    /**
                     * Decodes a ReportBenchmarkResultResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportBenchmarkResultResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.bench.ReportBenchmarkResultResponse;

                    /**
                     * Verifies a ReportBenchmarkResultResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportBenchmarkResultResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportBenchmarkResultResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.bench.ReportBenchmarkResultResponse;

                    /**
                     * Creates a plain object from a ReportBenchmarkResultResponse message. Also converts values to other types if specified.
                     * @param message ReportBenchmarkResultResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.bench.ReportBenchmarkResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportBenchmarkResultResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace common. */
            namespace common {

                /** Properties of a GetCurrentSessionRequest. */
                interface IGetCurrentSessionRequest {
                }

                /** Represents a GetCurrentSessionRequest. */
                class GetCurrentSessionRequest implements IGetCurrentSessionRequest {

                    /**
                     * Constructs a new GetCurrentSessionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.common.IGetCurrentSessionRequest);

                    /**
                     * Creates a new GetCurrentSessionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCurrentSessionRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.common.IGetCurrentSessionRequest): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Encodes the specified GetCurrentSessionRequest message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @param message GetCurrentSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.common.IGetCurrentSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCurrentSessionRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @param message GetCurrentSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.common.IGetCurrentSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Verifies a GetCurrentSessionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCurrentSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCurrentSessionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Creates a plain object from a GetCurrentSessionRequest message. Also converts values to other types if specified.
                     * @param message GetCurrentSessionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.common.GetCurrentSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCurrentSessionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCurrentSessionResponse. */
                interface IGetCurrentSessionResponse {

                    /** GetCurrentSessionResponse team */
                    team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetCurrentSessionResponse contestant */
                    contestant?: (isuxportal.proto.resources.IContestant|null);

                    /** GetCurrentSessionResponse discordInvitationUrl */
                    discordInvitationUrl?: (string|null);
                }

                /** Represents a GetCurrentSessionResponse. */
                class GetCurrentSessionResponse implements IGetCurrentSessionResponse {

                    /**
                     * Constructs a new GetCurrentSessionResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.common.IGetCurrentSessionResponse);

                    /** GetCurrentSessionResponse team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetCurrentSessionResponse contestant. */
                    public contestant?: (isuxportal.proto.resources.IContestant|null);

                    /** GetCurrentSessionResponse discordInvitationUrl. */
                    public discordInvitationUrl: string;

                    /**
                     * Creates a new GetCurrentSessionResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCurrentSessionResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.common.IGetCurrentSessionResponse): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Encodes the specified GetCurrentSessionResponse message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @param message GetCurrentSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.common.IGetCurrentSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCurrentSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @param message GetCurrentSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.common.IGetCurrentSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Verifies a GetCurrentSessionResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCurrentSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCurrentSessionResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Creates a plain object from a GetCurrentSessionResponse message. Also converts values to other types if specified.
                     * @param message GetCurrentSessionResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.common.GetCurrentSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCurrentSessionResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace dcim. */
            namespace dcim {

                /** Represents an InstanceManagementService */
                class InstanceManagementService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new InstanceManagementService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new InstanceManagementService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): InstanceManagementService;

                    /**
                     * Calls InformInstanceStateUpdate.
                     * @param request InformInstanceStateUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InformInstanceStateUpdateResponse
                     */
                    public informInstanceStateUpdate(request: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest, callback: isuxportal.proto.services.dcim.InstanceManagementService.InformInstanceStateUpdateCallback): void;

                    /**
                     * Calls InformInstanceStateUpdate.
                     * @param request InformInstanceStateUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public informInstanceStateUpdate(request: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest): Promise<isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse>;
                }

                namespace InstanceManagementService {

                    /**
                     * Callback as used by {@link isuxportal.proto.services.dcim.InstanceManagementService#informInstanceStateUpdate}.
                     * @param error Error, if any
                     * @param [response] InformInstanceStateUpdateResponse
                     */
                    type InformInstanceStateUpdateCallback = (error: (Error|null), response?: isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse) => void;
                }

                /** Properties of an InformInstanceStateUpdateRequest. */
                interface IInformInstanceStateUpdateRequest {

                    /** InformInstanceStateUpdateRequest token */
                    token?: (string|null);

                    /** InformInstanceStateUpdateRequest instance */
                    instance?: (isuxportal.proto.resources.IContestantInstance|null);
                }

                /** Represents an InformInstanceStateUpdateRequest. */
                class InformInstanceStateUpdateRequest implements IInformInstanceStateUpdateRequest {

                    /**
                     * Constructs a new InformInstanceStateUpdateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest);

                    /** InformInstanceStateUpdateRequest token. */
                    public token: string;

                    /** InformInstanceStateUpdateRequest instance. */
                    public instance?: (isuxportal.proto.resources.IContestantInstance|null);

                    /**
                     * Creates a new InformInstanceStateUpdateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InformInstanceStateUpdateRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest): isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest;

                    /**
                     * Encodes the specified InformInstanceStateUpdateRequest message. Does not implicitly {@link isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest.verify|verify} messages.
                     * @param message InformInstanceStateUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InformInstanceStateUpdateRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest.verify|verify} messages.
                     * @param message InformInstanceStateUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.dcim.IInformInstanceStateUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InformInstanceStateUpdateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InformInstanceStateUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest;

                    /**
                     * Decodes an InformInstanceStateUpdateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InformInstanceStateUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest;

                    /**
                     * Verifies an InformInstanceStateUpdateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InformInstanceStateUpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InformInstanceStateUpdateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest;

                    /**
                     * Creates a plain object from an InformInstanceStateUpdateRequest message. Also converts values to other types if specified.
                     * @param message InformInstanceStateUpdateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.dcim.InformInstanceStateUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InformInstanceStateUpdateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InformInstanceStateUpdateResponse. */
                interface IInformInstanceStateUpdateResponse {
                }

                /** Represents an InformInstanceStateUpdateResponse. */
                class InformInstanceStateUpdateResponse implements IInformInstanceStateUpdateResponse {

                    /**
                     * Constructs a new InformInstanceStateUpdateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.dcim.IInformInstanceStateUpdateResponse);

                    /**
                     * Creates a new InformInstanceStateUpdateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InformInstanceStateUpdateResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.dcim.IInformInstanceStateUpdateResponse): isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse;

                    /**
                     * Encodes the specified InformInstanceStateUpdateResponse message. Does not implicitly {@link isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse.verify|verify} messages.
                     * @param message InformInstanceStateUpdateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.dcim.IInformInstanceStateUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InformInstanceStateUpdateResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse.verify|verify} messages.
                     * @param message InformInstanceStateUpdateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.dcim.IInformInstanceStateUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InformInstanceStateUpdateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InformInstanceStateUpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse;

                    /**
                     * Decodes an InformInstanceStateUpdateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InformInstanceStateUpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse;

                    /**
                     * Verifies an InformInstanceStateUpdateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InformInstanceStateUpdateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InformInstanceStateUpdateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse;

                    /**
                     * Creates a plain object from an InformInstanceStateUpdateResponse message. Also converts values to other types if specified.
                     * @param message InformInstanceStateUpdateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.dcim.InformInstanceStateUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InformInstanceStateUpdateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace registration. */
            namespace registration {

                /** Properties of a CreateTeamRequest. */
                interface ICreateTeamRequest {

                    /** CreateTeamRequest teamName */
                    teamName?: (string|null);

                    /** CreateTeamRequest name */
                    name?: (string|null);

                    /** CreateTeamRequest emailAddress */
                    emailAddress?: (string|null);

                    /** CreateTeamRequest isStudent */
                    isStudent?: (boolean|null);
                }

                /** Represents a CreateTeamRequest. */
                class CreateTeamRequest implements ICreateTeamRequest {

                    /**
                     * Constructs a new CreateTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.ICreateTeamRequest);

                    /** CreateTeamRequest teamName. */
                    public teamName: string;

                    /** CreateTeamRequest name. */
                    public name: string;

                    /** CreateTeamRequest emailAddress. */
                    public emailAddress: string;

                    /** CreateTeamRequest isStudent. */
                    public isStudent: boolean;

                    /**
                     * Creates a new CreateTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.ICreateTeamRequest): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Encodes the specified CreateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @param message CreateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @param message CreateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Verifies a CreateTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
                     * @param message CreateTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.CreateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTeamResponse. */
                interface ICreateTeamResponse {

                    /** CreateTeamResponse teamId */
                    teamId?: (number|Long|null);
                }

                /** Represents a CreateTeamResponse. */
                class CreateTeamResponse implements ICreateTeamResponse {

                    /**
                     * Constructs a new CreateTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.ICreateTeamResponse);

                    /** CreateTeamResponse teamId. */
                    public teamId: (number|Long);

                    /**
                     * Creates a new CreateTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.ICreateTeamResponse): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Encodes the specified CreateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @param message CreateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @param message CreateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Verifies a CreateTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
                     * @param message CreateTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.CreateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JoinTeamRequest. */
                interface IJoinTeamRequest {

                    /** JoinTeamRequest teamId */
                    teamId?: (number|Long|null);

                    /** JoinTeamRequest inviteToken */
                    inviteToken?: (string|null);

                    /** JoinTeamRequest name */
                    name?: (string|null);

                    /** JoinTeamRequest isStudent */
                    isStudent?: (boolean|null);
                }

                /** Represents a JoinTeamRequest. */
                class JoinTeamRequest implements IJoinTeamRequest {

                    /**
                     * Constructs a new JoinTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IJoinTeamRequest);

                    /** JoinTeamRequest teamId. */
                    public teamId: (number|Long);

                    /** JoinTeamRequest inviteToken. */
                    public inviteToken: string;

                    /** JoinTeamRequest name. */
                    public name: string;

                    /** JoinTeamRequest isStudent. */
                    public isStudent: boolean;

                    /**
                     * Creates a new JoinTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IJoinTeamRequest): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Encodes the specified JoinTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @param message JoinTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @param message JoinTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Verifies a JoinTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
                     * @param message JoinTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.JoinTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JoinTeamResponse. */
                interface IJoinTeamResponse {
                }

                /** Represents a JoinTeamResponse. */
                class JoinTeamResponse implements IJoinTeamResponse {

                    /**
                     * Constructs a new JoinTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IJoinTeamResponse);

                    /**
                     * Creates a new JoinTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IJoinTeamResponse): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Encodes the specified JoinTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @param message JoinTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @param message JoinTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Verifies a JoinTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
                     * @param message JoinTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.JoinTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationSessionQuery. */
                interface IGetRegistrationSessionQuery {

                    /** GetRegistrationSessionQuery teamId */
                    teamId?: (number|Long|null);

                    /** GetRegistrationSessionQuery inviteToken */
                    inviteToken?: (string|null);
                }

                /** Represents a GetRegistrationSessionQuery. */
                class GetRegistrationSessionQuery implements IGetRegistrationSessionQuery {

                    /**
                     * Constructs a new GetRegistrationSessionQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionQuery);

                    /** GetRegistrationSessionQuery teamId. */
                    public teamId: (number|Long);

                    /** GetRegistrationSessionQuery inviteToken. */
                    public inviteToken: string;

                    /**
                     * Creates a new GetRegistrationSessionQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationSessionQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionQuery): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @param message GetRegistrationSessionQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IGetRegistrationSessionQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @param message GetRegistrationSessionQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IGetRegistrationSessionQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Verifies a GetRegistrationSessionQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationSessionQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationSessionQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Creates a plain object from a GetRegistrationSessionQuery message. Also converts values to other types if specified.
                     * @param message GetRegistrationSessionQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.GetRegistrationSessionQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationSessionQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationSessionResponse. */
                interface IGetRegistrationSessionResponse {

                    /** GetRegistrationSessionResponse team */
                    team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetRegistrationSessionResponse ready */
                    ready?: (boolean|null);

                    /** GetRegistrationSessionResponse joinable */
                    joinable?: (boolean|null);

                    /** GetRegistrationSessionResponse githubLogin */
                    githubLogin?: (string|null);

                    /** GetRegistrationSessionResponse discordTag */
                    discordTag?: (string|null);

                    /** GetRegistrationSessionResponse inviteUrl */
                    inviteUrl?: (string|null);
                }

                /** Represents a GetRegistrationSessionResponse. */
                class GetRegistrationSessionResponse implements IGetRegistrationSessionResponse {

                    /**
                     * Constructs a new GetRegistrationSessionResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionResponse);

                    /** GetRegistrationSessionResponse team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetRegistrationSessionResponse ready. */
                    public ready: boolean;

                    /** GetRegistrationSessionResponse joinable. */
                    public joinable: boolean;

                    /** GetRegistrationSessionResponse githubLogin. */
                    public githubLogin: string;

                    /** GetRegistrationSessionResponse discordTag. */
                    public discordTag: string;

                    /** GetRegistrationSessionResponse inviteUrl. */
                    public inviteUrl: string;

                    /**
                     * Creates a new GetRegistrationSessionResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationSessionResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionResponse): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @param message GetRegistrationSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IGetRegistrationSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @param message GetRegistrationSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IGetRegistrationSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Verifies a GetRegistrationSessionResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationSessionResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Creates a plain object from a GetRegistrationSessionResponse message. Also converts values to other types if specified.
                     * @param message GetRegistrationSessionResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.GetRegistrationSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationSessionResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace common. */
        namespace common {

            /** Properties of a DashboardRequest. */
            interface IDashboardRequest {
            }

            /** Represents a DashboardRequest. */
            class DashboardRequest implements IDashboardRequest {

                /**
                 * Constructs a new DashboardRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.common.IDashboardRequest);

                /**
                 * Creates a new DashboardRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DashboardRequest instance
                 */
                public static create(properties?: isuxportal.proto.common.IDashboardRequest): isuxportal.proto.common.DashboardRequest;

                /**
                 * Encodes the specified DashboardRequest message. Does not implicitly {@link isuxportal.proto.common.DashboardRequest.verify|verify} messages.
                 * @param message DashboardRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.common.IDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DashboardRequest message, length delimited. Does not implicitly {@link isuxportal.proto.common.DashboardRequest.verify|verify} messages.
                 * @param message DashboardRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.common.IDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DashboardRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DashboardRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.common.DashboardRequest;

                /**
                 * Decodes a DashboardRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DashboardRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.common.DashboardRequest;

                /**
                 * Verifies a DashboardRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DashboardRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DashboardRequest
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.common.DashboardRequest;

                /**
                 * Creates a plain object from a DashboardRequest message. Also converts values to other types if specified.
                 * @param message DashboardRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.common.DashboardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DashboardRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DashboardResponse. */
            interface IDashboardResponse {
            }

            /** Represents a DashboardResponse. */
            class DashboardResponse implements IDashboardResponse {

                /**
                 * Constructs a new DashboardResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.common.IDashboardResponse);

                /**
                 * Creates a new DashboardResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DashboardResponse instance
                 */
                public static create(properties?: isuxportal.proto.common.IDashboardResponse): isuxportal.proto.common.DashboardResponse;

                /**
                 * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.common.DashboardResponse.verify|verify} messages.
                 * @param message DashboardResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.common.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.common.DashboardResponse.verify|verify} messages.
                 * @param message DashboardResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.common.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DashboardResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DashboardResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.common.DashboardResponse;

                /**
                 * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DashboardResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.common.DashboardResponse;

                /**
                 * Verifies a DashboardResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DashboardResponse
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.common.DashboardResponse;

                /**
                 * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                 * @param message DashboardResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.common.DashboardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DashboardResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
