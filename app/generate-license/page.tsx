"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Mail, Key, Lock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { toast } from "sonner";

interface TempUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    user_type: string;
    status: string;
    role: string;
    organization: string;
    createdAt: string;
    license: {
        licenseKey: string;
        plan: string;
        activated: boolean;
        activatedAt: string | null;
        expiresAt: string | null;
        revoked: boolean;
        createdAt: string;
    };
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export default function GenerateLicensePage() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [generatedLicenseKey, setGeneratedLicenseKey] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        user_type: "temp",
        subscriptionType: "monthly",
    });
    const [errors, setErrors] = useState({
        email: "",
        firstName: "",
        lastName: "",
        user_type: "",
        subscriptionType: "",
    });
    const [tempUsers, setTempUsers] = useState<TempUser[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(20);
    const [statusFilter, setStatusFilter] = useState<string>("");
    const [showUsersTable, setShowUsersTable] = useState(false);

    // Check authentication on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("/api/auth/verify");
                const result = await response.json();
                
                if (result.success && result.authenticated) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    setShowLoginModal(true);
                }
            } catch (error) {
                console.error("Auth check error:", error);
                setIsAuthenticated(false);
                setShowLoginModal(true);
            } finally {
                setIsCheckingAuth(false);
            }
        };

        checkAuth();
    }, []);

    // Fetch temp users when authenticated
    useEffect(() => {
        if (isAuthenticated) {
            fetchTempUsers();
        }
    }, [isAuthenticated, currentPage, pageLimit, statusFilter]);

    const fetchTempUsers = async () => {
        setIsLoadingUsers(true);
        try {
            const params = new URLSearchParams({
                page: currentPage.toString(),
                limit: pageLimit.toString(),
            });
            if (statusFilter) {
                params.append("status", statusFilter);
            }

            const response = await fetch(`/api/licenses/temp-users?${params.toString()}`, {
                credentials: "include",
            });
            const result = await response.json();

            if (result.success && result.data) {
                setTempUsers(result.data.users || []);
                setPagination(result.data.pagination || null);
            } else {
                toast.error(result.message || "Failed to fetch users");
            }
        } catch (error) {
            console.error("Error fetching temp users:", error);
            toast.error("An error occurred while fetching users");
        } finally {
            setIsLoadingUsers(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggingIn(true);
        setLoginError("");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();

            if (result.success) {
                setIsAuthenticated(true);
                setShowLoginModal(false);
                toast.success("Login successful!");
                setLoginData({ email: "", password: "" });
            } else {
                setLoginError(result.message || "Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginError("An error occurred during login");
        } finally {
            setIsLoggingIn(false);
        }
    };

    const validateForm = () => {
        const newErrors = {
            email: "",
            firstName: "",
            lastName: "",
            user_type: "",
            subscriptionType: "",
        };
        let isValid = true;

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address";
                isValid = false;
            }
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        }

        if (!formData.user_type) {
            newErrors.user_type = "User type is required";
            isValid = false;
        }

        if (!formData.subscriptionType) {
            newErrors.subscriptionType = "Subscription type is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleGenerateLicense = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsGenerating(true);
        setGeneratedLicenseKey(null);

        try {
            const response = await fetch("/api/generate-license", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    user_type: formData.user_type,
                    subscriptionType: formData.subscriptionType,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setGeneratedLicenseKey(result.licenseKey);
                toast.success("License key generated successfully!");
            } else {
                toast.error(result.message || "Failed to generate license key");
            }
        } catch (error) {
            console.error("Generation error:", error);
            toast.error("An error occurred while generating the license key");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSendEmail = async () => {
        if (!generatedLicenseKey) return;

        setIsSending(true);

        try {
            const response = await fetch("/api/generate-license/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    licenseKey: generatedLicenseKey,
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Email sent successfully!");
            } else {
                toast.error(result.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Email sending error:", error);
            toast.error("An error occurred while sending the email");
        } finally {
            setIsSending(false);
        }
    };

    // Show loading state while checking authentication
    if (isCheckingAuth) {
        return (
            <div className="min-h-screen bg-white font-sans text-[#191716] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-[#1381e5] animate-spin" />
                    <p className="text-neutral-600">Checking authentication...</p>
                </div>
            </div>
        );
    }

    // Show login modal if not authenticated
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-white font-sans text-[#191716]">
                <NavbarDemo />
                
                {/* Login Modal */}
                {showLoginModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#1381e5] flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#191716]">
                                            Authentication Required
                                        </h2>
                                        <p className="text-sm text-neutral-600">
                                            Please login to access this page
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={loginData.email}
                                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                            className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-700">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                            className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>

                                    {loginError && (
                                        <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                                            <p className="text-sm text-red-600">{loginError}</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoggingIn}
                                        className="h-12 rounded-xl bg-[#1381e5] text-white font-bold hover:bg-[#106bc0] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                    >
                                        {isLoggingIn ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Logging in...
                                            </>
                                        ) : (
                                            "Login"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                <main className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                    <div className="flex flex-col items-center justify-center gap-6 min-h-[400px]">
                        <Lock className="w-16 h-16 text-neutral-300" />
                        <p className="text-xl text-neutral-600">Please login to continue</p>
                    </div>
                </main>

                <Footer bgColor="bg-[#F5F5F7]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-[#191716]">
            <NavbarDemo />

            <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1381e5] to-[#5ea2ef] bg-clip-text text-transparent leading-[1.1]">
                            Generate License Key
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                            Enter the user details below to generate a license key. Once generated, you can send the license key via email.
                        </p>
                    </div>

                    {/* Temp Users Table Section */}
                    <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-[#1381e5]" />
                                <h2 className="text-2xl font-bold text-[#191716]">
                                    Temporary Users
                                </h2>
                            </div>
                            <button
                                onClick={() => {
                                    setShowUsersTable(!showUsersTable);
                                    if (!showUsersTable) {
                                        fetchTempUsers();
                                    }
                                }}
                                className="px-4 py-2 rounded-xl bg-[#1381e5] text-white font-semibold hover:bg-[#106bc0] transition-all"
                            >
                                {showUsersTable ? "Hide Users" : "Show Users"}
                            </button>
                        </div>

                        {showUsersTable && (
                            <div className="flex flex-col gap-4">
                                {/* Filters */}
                                <div className="flex flex-wrap gap-4 items-end">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-700">
                                            Status Filter
                                        </label>
                                        <select
                                            value={statusFilter}
                                            onChange={(e) => {
                                                setStatusFilter(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            className="h-10 rounded-xl border border-neutral-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all"
                                        >
                                            <option value="">All</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-700">
                                            Items Per Page
                                        </label>
                                        <select
                                            value={pageLimit}
                                            onChange={(e) => {
                                                setPageLimit(Number(e.target.value));
                                                setCurrentPage(1);
                                            }}
                                            className="h-10 rounded-xl border border-neutral-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all"
                                        >
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Table */}
                                {isLoadingUsers ? (
                                    <div className="flex items-center justify-center py-12">
                                        <Loader2 className="w-8 h-8 text-[#1381e5] animate-spin" />
                                    </div>
                                ) : tempUsers.length > 0 ? (
                                    <>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="bg-neutral-50 border-b border-neutral-200">
                                                        <th className="text-left p-4 font-semibold text-neutral-700">User ID</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">Name</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">Email</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">Status</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">License Key</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">Activated</th>
                                                        <th className="text-left p-4 font-semibold text-neutral-700">Created At</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tempUsers.map((user) => (
                                                        <tr key={user.userId} className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                                                            <td className="p-4 text-sm font-mono text-neutral-600">{user.userId}</td>
                                                            <td className="p-4 text-sm text-neutral-800">{user.firstName} {user.lastName}</td>
                                                            <td className="p-4 text-sm text-neutral-800">{user.email}</td>
                                                            <td className="p-4">
                                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                                    user.status === "active" 
                                                                        ? "bg-green-100 text-green-700" 
                                                                        : "bg-red-100 text-red-700"
                                                                }`}>
                                                                    {user.status}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 text-sm font-mono text-[#1381e5] break-all">{user.license?.licenseKey || "N/A"}</td>
                                                            <td className="p-4">
                                                                {user.license?.activated ? (
                                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                                                        Yes
                                                                    </span>
                                                                ) : (
                                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                                                                        No
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="p-4 text-sm text-neutral-600">
                                                                {new Date(user.createdAt).toLocaleDateString()}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Pagination */}
                                        {pagination && (
                                            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                                                <div className="text-sm text-neutral-600">
                                                    Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} users
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                                        disabled={!pagination.hasPrevPage || isLoadingUsers}
                                                        className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                    <span className="px-4 py-2 text-sm font-semibold text-neutral-700">
                                                        Page {pagination.currentPage} of {pagination.totalPages}
                                                    </span>
                                                    <button
                                                        onClick={() => setCurrentPage(prev => Math.min(pagination.totalPages, prev + 1))}
                                                        disabled={!pagination.hasNextPage || isLoadingUsers}
                                                        className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-12 text-neutral-500">
                                        No users found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleGenerateLicense} className="flex flex-col gap-6 bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold opacity-70">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`w-full h-14 rounded-2xl border px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-white ${
                                        errors.firstName ? "border-red-500" : "border-neutral-200"
                                    }`}
                                    placeholder="Enter first name"
                                />
                                {errors.firstName && (
                                    <p className="text-sm text-red-500">{errors.firstName}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold opacity-70">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`w-full h-14 rounded-2xl border px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-white ${
                                        errors.lastName ? "border-red-500" : "border-neutral-200"
                                    }`}
                                    placeholder="Enter last name"
                                />
                                {errors.lastName && (
                                    <p className="text-sm text-red-500">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold opacity-70">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full h-14 rounded-2xl border px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-white ${
                                    errors.email ? "border-red-500" : "border-neutral-200"
                                }`}
                                placeholder="Enter email address"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold opacity-70">
                                    User Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="user_type"
                                    value={formData.user_type}
                                    onChange={handleInputChange}
                                    className={`w-full h-14 rounded-2xl border px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-white ${
                                        errors.user_type ? "border-red-500" : "border-neutral-200"
                                    }`}
                                
                                >
                                    <option value="temp">Temp</option>
                                    <option value="user">Production</option>
                                </select>
                                {errors.user_type && (
                                    <p className="text-sm text-red-500">{errors.user_type}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold opacity-70">
                                    Subscription Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="subscriptionType"
                                    value={formData.subscriptionType}
                                    onChange={handleInputChange}
                                    className={`w-full h-14 rounded-2xl border px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-white ${
                                        errors.subscriptionType ? "border-red-500" : "border-neutral-200"
                                    }`}
                                >
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="halfyearly">Half-Yearly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                                {errors.subscriptionType && (
                                    <p className="text-sm text-red-500">{errors.subscriptionType}</p>
                                )}
                            </div>
                        </div>

                        <button
                            disabled={isGenerating}
                            type="submit"
                            className="h-16 rounded-full bg-[#1381e5] text-white font-bold text-xl hover:bg-[#106bc0] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/10 active:scale-[0.98] mt-4"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Key className="w-5 h-5" />
                                    Generate License Key
                                </>
                            )}
                        </button>
                    </form>

                    {generatedLicenseKey && (
                        <div className="bg-gradient-to-r from-[#1381e5]/10 to-[#5ea2ef]/10 rounded-2xl p-8 border border-[#1381e5]/20">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#1381e5] flex items-center justify-center">
                                        <Key className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1381e5]">
                                            License Key Generated
                                        </h3>
                                        <p className="text-sm text-neutral-600">
                                            License key has been generated successfully
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                    <p className="text-sm font-semibold text-neutral-600 mb-2">
                                        License Key:
                                    </p>
                                    <p className="text-2xl font-mono font-bold text-[#1381e5] break-all">
                                        {generatedLicenseKey}
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                    <p className="text-sm font-semibold text-neutral-600 mb-2">
                                        License URL:
                                    </p>
                                    <p className="text-sm font-mono text-neutral-700 break-all">
                                    {process.env.NEXT_PUBLIC_DEEPLINK_SCHEME || 'simviz://activate'}?license_key={generatedLicenseKey}
                                    </p>
                                </div>

                                <button
                                    onClick={handleSendEmail}
                                    disabled={isSending}
                                    className="h-14 rounded-full bg-[#1381e5] text-white font-bold text-lg hover:bg-[#106bc0] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/10 active:scale-[0.98]"
                                >
                                    {isSending ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending Email...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="w-5 h-5" />
                                            Send Email to {formData.email}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer bgColor="bg-[#F5F5F7]" />
        </div>
    );
}
